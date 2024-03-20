"use client";

import { useUser } from "../../../../../contexts/UserContext";
import UserBoxLayout from "../../../locale/userBoxLayout/userBoxLayout";
import ActivitiesList from "../activitiesList/ActivitiesList";
import FilterActivitiesOpen from "../filterActivitiesOpen/FilterActivitiesOpen";

type ActivitiesContainerProps = {
  filterBy: string;
};

function ActivitiesContainer({ filterBy }: ActivitiesContainerProps) {
  const { filterActivities } = useUser();

  const activities = filterActivities(filterBy);
  return (
    <UserBoxLayout
      padding={{ top: 2.4, left: 3.2, right: 3.2, bottom: 4.8 }}
      additionalStyles={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "40rem",
        overflow: "hidden",
      }}
    >
      <FilterActivitiesOpen filterBy={filterBy} />
      <ActivitiesList list={activities} />
    </UserBoxLayout>
  );
}

export default ActivitiesContainer;
