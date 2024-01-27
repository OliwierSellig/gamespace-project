import { ReactNode } from "react";
import styles from "./dateSetter.module.scss";

type DateSetterProps = {
  children: ReactNode;
  heading: string;
};

function DateSetter({ children, heading }: DateSetterProps) {
  return (
    <div className={styles.container}>
      <p className={styles.header}>{heading}</p>
      <nav className={styles.row}>{children}</nav>
    </div>
  );
}

DateSetter.Separator = DateSetterSeparator;

function DateSetterSeparator() {
  return <div className={styles.sep}>/</div>;
}

export default DateSetter;
