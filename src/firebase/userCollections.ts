import {
  DocumentData,
  QueryDocumentSnapshot,
  getDocs,
} from "firebase/firestore";
import { FirestoreCollectionType } from "../utils/types/firebase";
import {
  ActivityItem,
  BasicItemType,
  CollectionItemType,
  LibraryItemType,
  ReviewType,
} from "../utils/types/types";
import { refreshActivities } from "./activities";
import { getUserCollectionRef, setTimestampSecondsToDate } from "./utils";

export async function getUserCollectionsFromFirestore(props: {
  userID: string;
  collections: FirestoreCollectionType[];
}) {
  function getDocumentToClient(props: {
    doc: QueryDocumentSnapshot<DocumentData, DocumentData>;
    collectionType: FirestoreCollectionType;
  }) {
    switch (props.collectionType) {
      case "wishlist":
        return props.doc.data() as BasicItemType;

      case "reviews":
        return {
          ...props.doc.data(),
          editDate: setTimestampSecondsToDate(props.doc.data().editDate),
        } as ReviewType;

      case "library":
        return props.doc.data() as LibraryItemType;

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

    console.log(collectionSnapshotsDocs);

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
