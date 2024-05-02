import {
  CollectionReference,
  DocumentData,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { calculateDayDifferance } from "../utils/functions/functions";

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
