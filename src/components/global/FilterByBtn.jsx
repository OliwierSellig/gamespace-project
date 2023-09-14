import { useState } from "react";
import styles from "./filterByBtn.module.scss";

function FilterByBtn({ hanldeClick, filterBy }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className={styles.btn} onClick={() => setIsOpen((open) => !open)}>
      Filter by:&nbsp;
      <span className={styles.btn__optionChosen}>{`${filterBy
        .at(0)
        .toUpperCase()}${filterBy.slice(1)}`}</span>
      <img
        className={styles.btn__img}
        src="/svg/arrow-down.svg"
        alt="Arrow Down"
      />
      {isOpen && (
        <ul className={styles.list}>
          <li className={styles.item} onClick={() => hanldeClick("all")}>
            All
          </li>
          <li className={styles.item} onClick={() => hanldeClick("platforms")}>
            Platform
          </li>
          <li className={styles.item} onClick={() => hanldeClick("developers")}>
            Developer
          </li>
          <li className={styles.item} onClick={() => hanldeClick("genres")}>
            Genre
          </li>
          <li className={styles.item} onClick={() => hanldeClick("years")}>
            Year
          </li>
        </ul>
      )}
    </button>
  );
}

export default FilterByBtn;
