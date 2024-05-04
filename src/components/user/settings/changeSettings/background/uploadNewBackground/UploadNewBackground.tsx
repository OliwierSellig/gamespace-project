import { HiOutlineArrowUpOnSquareStack } from "react-icons/hi2";
import { useUserSettings } from "../../../../../../contexts/userSettingsContext/UserSettingsContext";
import styles from "./uploadNewBackground.module.scss";

type UploadNewBackgroundProps = {
  id: string;
};

function UploadNewBackground({ id }: UploadNewBackgroundProps) {
  const { setNewBackground } = useUserSettings();
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        <span>Upload New</span>
        <HiOutlineArrowUpOnSquareStack />
        <input
          id={id}
          onChange={(e) => setNewBackground(e.currentTarget.files[0])}
          type="file"
          className={styles.input}
        />
      </label>
    </>
  );
}

export default UploadNewBackground;
