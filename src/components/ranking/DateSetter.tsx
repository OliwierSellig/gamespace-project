import { ReactNode } from "react";

import styles from "./dateSetter.module.scss";

type DateSetterProps = {
  children: ReactNode;
  date: { day: number; month: string; year: number };
};

function DateSetter({ children, date }: DateSetterProps) {
  return (
    <div className={styles.container}>
      <p className={styles.header}>{children}</p>
      <nav className={styles.row}>
        <button className={styles.button}>{date.month}</button>
        <div className={styles.sep}>/</div>
        <button className={styles.button}>{date.day}</button>
        <div className={styles.sep}>/</div>
        <button className={styles.button}>{date.year}</button>
      </nav>
    </div>
  );
}

export default DateSetter;
