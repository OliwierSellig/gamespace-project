import {
  CollectionReference,
  DocumentData,
  QueryDocumentSnapshot,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { calculateDayDifferance } from "../utils/functions/functions";
import { FirestoreCollectionType } from "../utils/types/firebase";
import {
  ActivityItem,
  BasicItemType,
  CollectionItemType,
  LibraryItemType,
  ReviewType,
} from "../utils/types/types";
import {
  getSingleDocumentRef,
  getUserCollectionRef,
  setTimestampSecondsToDate,
} from "./utils";

// -------------- Getting a list of docuemnts in given collections ------------------

export async function getUserCollectionsFromFirestore(props: {
  userID: string;
  collections: FirestoreCollectionType[];
}) {
  type ReturnType =
    | BasicItemType
    | LibraryItemType
    | ReviewType
    | CollectionItemType
    | ActivityItem;

  function getDocumentToClient(props: {
    doc: QueryDocumentSnapshot<DocumentData, DocumentData>;
    collectionType: FirestoreCollectionType;
  }): ReturnType {
    switch (props.collectionType) {
      case "wishlist":
        return props.doc.data() as BasicItemType;

      case "library":
        return props.doc.data() as LibraryItemType;

      case "reviews":
        return {
          ...props.doc.data(),
          editDate: setTimestampSecondsToDate(props.doc.data().editDate),
        } as ReviewType;

      case "collections":
        return {
          ...props.doc.data(),
          creationDate: setTimestampSecondsToDate(
            props.doc.data().creationDate,
          ),
        } as CollectionItemType;

      case "activities":
        return {
          action: props.doc.data().action,
          date: setTimestampSecondsToDate(props.doc.data().date),
        } as ActivityItem;
      default:
        return null;
    }
  }

  try {
    const uniqueCollections = Array.from(new Set(props.collections));
    const collectionRefs = uniqueCollections.map((col) =>
      getUserCollectionRef({
        id: props.userID,
        collection: col,
      }),
    );

    const collectionSnapshotsDocs = await Promise.all(
      collectionRefs.map(async (ref) => {
        return {
          id: ref.id as FirestoreCollectionType,
          collection:
            ref.id === "activities"
              ? await refreshActivities({
                  id: props.userID,
                  days: 30,
                  collectionRef: ref,
                })
              : (await getDocs(ref)).docs,
        };
      }),
    );

    const documentsObj = {
      library: [],
      wishlist: [],
      reviews: [],
      collections: [],
      activities: [],
    };

    collectionSnapshotsDocs.forEach((obj) => {
      if (documentsObj.hasOwnProperty(obj.id))
        documentsObj[obj.id] = obj.collection.map((doc) =>
          getDocumentToClient({ doc, collectionType: obj.id }),
        );
    });

    return documentsObj as {
      library: LibraryItemType[];
      wishlist: BasicItemType[];
      reviews: ReviewType[];
      collections: CollectionItemType[];
      activities: ActivityItem[];
    };
  } catch (error) {
    console.error(`Error getting collections:`, error);

    return null;
  }
}

// ----------------------------------------------------------------------------------

// -------------- Updating a list of given docuemnts in Firestore -------------------

export async function updateDocumentsInFirestoreCollections(props: {
  collectionType: FirestoreCollectionType;
  userID: string;
  documentData:
    | LibraryItemType[]
    | BasicItemType[]
    | ReviewType[]
    | CollectionItemType[]
    | ActivityItem[];
}) {
  try {
    const documentObjects = props.documentData.map(
      (
        data:
          | LibraryItemType
          | BasicItemType
          | ReviewType
          | CollectionItemType
          | ActivityItem,
      ) => {
        return {
          data,
          id: ("id" in data
            ? data.id
            : "game" in data
              ? data.game.id
              : crypto.randomUUID()
          ).toString(),
        };
      },
    );

    await Promise.all(
      documentObjects.map(
        async (obj) =>
          await setDoc(
            getSingleDocumentRef({
              userID: props.userID,
              collection: props.collectionType,
              documentID: obj.id,
            }),
            obj.data,
          ),
      ),
    );
  } catch (error) {
    console.error(
      `Error updating documents in ${props.collectionType}:`,
      error,
    );
  }
}

// ----------------------------------------------------------------------------------

// ---------------- Removing given docuemnt from Firestore --------------------------

export async function removeDocumentFromFirestoreCollection(props: {
  collectionType: FirestoreCollectionType;
  userID: string;
  documentID: string;
}) {
  try {
    const singleDocRef = getSingleDocumentRef({
      userID: props.userID,
      collection: props.collectionType,
      documentID: props.documentID,
    });

    await deleteDoc(singleDocRef);
  } catch (error) {
    console.error(
      `Error removing document from ${props.collectionType}:`,
      error,
    );
  }
}

// ----------------------------------------------------------------------------------

// ------------------ Refreshing User Activities ------------------------------------

async function refreshActivities(props: {
  days: number;
  id: string;
  collectionRef: CollectionReference<DocumentData, DocumentData>;
}) {
  const activitiesSnapshot = await getDocs(props.collectionRef);

  const recentActivites = activitiesSnapshot.docs.filter(
    (document) =>
      !calculateDayDifferance({
        dayDiff: props.days,
        date1: new Date(document.data().date.seconds * 1000),
        date2: new Date(),
      }),
  );
  activitiesSnapshot.docs.forEach(async (document) => {
    if (!recentActivites.map((d) => d.id).includes(document.id)) {
      const docRef = doc(props.collectionRef, document.id);
      await deleteDoc(docRef);
    }
  });

  return recentActivites;
}

// -----------------------------------------------------------------------------------
