import { useEffect, useRef, useState } from "react";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { filterActivities } from "../../../../../utils/data/user";
import { changeToUrlSlug } from "../../../../../utils/functions/functions";
import FilterActivitiesPopup from "../filterActivitiesPopup/FilterActivitiesPopup";
import styles from "./filterActivitiesOpen.module.scss";

type FilterActivitiesOpenProps = {
  filterBy: string;
};

function FilterActivitiesOpen({ filterBy }: FilterActivitiesOpenProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentFilter =
    filterActivities.find(
      (activity) => changeToUrlSlug(activity) === filterBy,
    ) || filterActivities.at(0);

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      )
        setIsOpen(false);
    }

    addEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
    addEventListener("scroll", () => setIsOpen(false));
    return () => {
      removeEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
      removeEventListener("scroll", () => setIsOpen(false));
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <button onClick={() => setIsOpen(true)} className={styles.btn}>
        <span>{currentFilter}</span>
        <HiMiniAdjustmentsHorizontal />
      </button>
      {isOpen && <FilterActivitiesPopup closePopup={() => setIsOpen(false)} />}
    </div>
  );
}

export default FilterActivitiesOpen;
