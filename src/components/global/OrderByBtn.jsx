import { useState } from "react";
import styles from "./orderByBtn.module.scss";

function OrderByBtn({ handleChange, order = "relevance" }) {
  const [isOpen, setIsOpen] = useState();

  return (
    <button className={styles.btn} onClick={() => setIsOpen((open) => !open)}>
      Order by:&nbsp;
      <span className={styles.btn__optionChosen}>{`${order
        .at(0)
        .toUpperCase()}${order.slice(1)}`}</span>
      <img
        className={styles.btn__img}
        src="/svg/arrow-down.svg"
        alt="Arrow Down"
      />
      {isOpen && (
        <ul className={styles.options__list}>
          <li
            tabIndex={0}
            role="'button"
            className={styles.options__item}
            onClick={() => handleChange("relevance")}
          >
            Relevance
          </li>
          <li
            tabIndex={0}
            role="'button"
            className={styles.options__item}
            onClick={() => handleChange("rating")}
          >
            Rating
          </li>
          <li
            tabIndex={0}
            role="'button"
            className={styles.options__item}
            onClick={() => handleChange("popularity")}
          >
            Popularity
          </li>
          <li
            tabIndex={0}
            role="'button"
            className={styles.options__item}
            onClick={() => handleChange("released")}
          >
            Released
          </li>
        </ul>
      )}
    </button>
  );
}

export default OrderByBtn;
