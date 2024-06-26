import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useUserSettings } from "../../../../../../contexts/userSettingsContext/UserSettingsContext";
import PreviewImageBox from "../../../../../global/previewImageBox/PreviewImageBox";
import styles from "./uploadAvatar.module.scss";

function UploadAvatar() {
  const { avatar, setNewAvatar } = useUserSettings();
  return (
    <div className={styles.container}>
      <label htmlFor="avatar">
        <PreviewImageBox size="sm" file={avatar} />
      </label>
      <label className={styles.label__btn} htmlFor="avatar">
        <span>Upload New</span>
        <HiOutlinePencilSquare />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewAvatar(e.currentTarget.files[0])
          }
          className={styles.input}
          id="avatar"
          type="file"
          accept="image/jpg, image/png, image/webp, image/jpeg"
        />
      </label>
    </div>
  );
}

export default UploadAvatar;
