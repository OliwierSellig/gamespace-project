import Link from "next/link";
import { filterActivities } from "../../../../../utils/data/user";
import { changeToUrlSlug } from "../../../../../utils/functions/functions";
import styles from "./filterActivitiesPopup.module.scss";

type FilterActivitiesPopupProps = {
  closePopup: () => void;
};

function FilterActivitiesPopup({ closePopup }: FilterActivitiesPopupProps) {
  return (
    <nav className={styles.container}>
      {filterActivities.map((item, i) => (
        <Link
          scroll={false}
          onClick={closePopup}
          key={i}
          className={styles.link}
          href={`/user/overview?filterActivities=${changeToUrlSlug(item)}`}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}

export default FilterActivitiesPopup;
