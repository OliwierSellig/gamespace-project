import { HiOutlineArrowUpOnSquareStack } from "react-icons/hi2";
import styles from "./uploadNewBackground.module.scss";

type UploadNewBackgroundProps = {
  id: string;
};

function UploadNewBackground({ id }: UploadNewBackgroundProps) {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        <span>Upload New</span>
        <HiOutlineArrowUpOnSquareStack />
      </label>
      <input id={id} type="file" className={styles.input} />
    </>
  );
}

export default UploadNewBackground;
