"use client";

import { useUser } from "../../../../../contexts/UserContext";
import ActivitiesList from "../activitiesList/ActivitiesList";
import styles from "./activitiesContainer.module.scss";
import FilterActivitiesOpen from "../filterActivitiesOpen/FilterActivitiesOpen";

type ActivitiesContainerProps = {
  filterBy: string;
};

function ActivitiesContainer({ filterBy }: ActivitiesContainerProps) {
  const { filterActivities } = useUser();

  const activities = filterActivities(filterBy);
  return (
    <div className={styles.container}>
      <FilterActivitiesOpen filterBy={filterBy} />
      <ActivitiesList list={activities} />
    </div>
  );
}

export default ActivitiesContainer;
