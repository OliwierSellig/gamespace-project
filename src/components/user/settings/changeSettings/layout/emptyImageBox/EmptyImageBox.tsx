import { ChangeEvent } from "react";
import { HiMiniPlus } from "react-icons/hi2";
import styles from "./emptyImageBox.module.scss";

type EmptyImageBoxProps = {
  id: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "avatar" | "background";
};

function EmptyImageBox({
  id,
  handleChange,
  type = "avatar",
}: EmptyImageBoxProps) {
  return (
    <label
      htmlFor={id}
      className={`${styles.container} ${styles[`container__${type}`]}`}
      aria-label={`Upload user ${type}`}
    >
      <HiMiniPlus />
      <input
        type="file"
        onChange={(e) => {
          handleChange(e);
        }}
        className={styles.input}
        id={id}
      />
    </label>
  );
}

export default EmptyImageBox;
