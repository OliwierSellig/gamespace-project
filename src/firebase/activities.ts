import { deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { calculateDayDifferance } from "../utils/functions/functions";
import { ActivityItem } from "../utils/types/types";
import { getUserCollectionRef } from "./utils";

function getSingleActivityRef(props: { userID: string; activityID: string }) {
  const activitesRef = getUserCollectionRef({
    collection: "activites",
    id: props.userID,
  });

  return doc(activitesRef, props.activityID);
}

export async function getFirestoreActivities(id: string) {
  try {
    const recentActivites = await refreshActivities({ id, days: 30 });

    const activitiesArray = recentActivites.map((document) => {
      return {
        action: document.data().action,
        date: new Date(document.data().date.seconds * 1000),
      };
    });

    return activitiesArray as ActivityItem[];
  } catch (error) {
    console.error("Error getting wishlist:", error);

    return [];
  }
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

async function refreshActivities(props: { days: number; id: string }) {
  const activitiesRef = getUserCollectionRef({
    id: props.id,
    collection: "activites",
  });
  const activitiesSnapshot = await getDocs(activitiesRef);
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
      const docRef = doc(activitiesRef, document.id);
      await deleteDoc(docRef);
    }
  });

  return recentActivites;
}
