import { ReactNode } from "react";
import styles from "./userSelector.module.scss";
import { HiMiniChevronDown } from "react-icons/hi2";

type UserSelectorProps = {
  list: { item: string; currentlyActive: boolean }[];
  children: ReactNode;
};

function UserSelector({ list, children }: UserSelectorProps) {
  const activeItem = list.find((item) => item.currentlyActive);
  return (
    <div className={styles.container}>
      <span className={styles.text}>{children} </span>
      <button className={styles.btn}>
        <span>{activeItem.item}</span>
        <HiMiniChevronDown />
      </button>
    </div>
  );
}

export default UserSelector;
