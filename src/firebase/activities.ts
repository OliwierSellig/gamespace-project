import {
  CollectionReference,
  DocumentData,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { calculateDayDifferance } from "../utils/functions/functions";
import { ActivityItem } from "../utils/types/types";
import { getUserCollectionRef } from "./utils";

function getSingleActivityRef(props: { userID: string; activityID: string }) {
  const activitesRef = getUserCollectionRef({
    collection: "activities",
    id: props.userID,
  });

  return doc(activitesRef, props.activityID);
}

export async function addActivitiesToUserFirestore(props: {
  id: string;
  activities: ActivityItem[];
}) {
  try {
    props.activities.forEach(async (activity) => {
      const singleActivityRef = getSingleActivityRef({
        userID: props.id,
        activityID: crypto.randomUUID(),
      });
      await setDoc(singleActivityRef, activity);
    });
  } catch (error) {
    console.error("Error adding activity:", error);
  }
}

export async function refreshActivities(props: {
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
