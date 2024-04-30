import { doc, getDocs, setDoc } from "firebase/firestore";
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
    const activitiesRef = getUserCollectionRef({ id, collection: "activites" });
    const activitiesSnapshot = await getDocs(activitiesRef);

    const activitiesArray = activitiesSnapshot.docs.map((doc) => {
      return {
        action: doc.data().action,
        date: new Date(doc.data().date.seconds * 1000),
      };
    });

    console.log(activitiesArray);

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
