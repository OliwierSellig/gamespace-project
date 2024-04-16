import { ChangeEvent } from "react";
import { HiMiniPlus } from "react-icons/hi2";
import styles from "./setAvatarBox.module.scss";

type SetAvatarBoxProps = {
  id: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function SetAvatarBox({ id, handleChange }: SetAvatarBoxProps) {
  return (
    <label htmlFor={id} className={styles.container}>
      <input
        type="file"
        onChange={(e) => {
          handleChange(e);
        }}
        className={styles.input}
        id={id}
      />
      <HiMiniPlus />
    </label>
  );
}

export default SetAvatarBox;
