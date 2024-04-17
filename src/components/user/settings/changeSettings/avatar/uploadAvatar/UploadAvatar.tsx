import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import PreviewImageBox from "../../../../../auth/signup/signupPreviewImage/PreviewImageBox";
import styles from "./uploadAvatar.module.scss";

function UploadAvatar() {
  const { avatar, setNewAvatar } = useUserSettings();
  return (
    <div className={styles.container}>
      <label tabIndex={0} htmlFor="avatar">
        <PreviewImageBox size="sm" file={avatar} />
      </label>
      <label tabIndex={0} className={styles.label__btn} htmlFor="avatar">
        <span>Upload New</span>
        <HiOutlinePencilSquare />
      </label>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewAvatar(e.currentTarget.files[0])
        }
        className={styles.input}
        id="avatar"
        type="file"
        accept="image/jpg, image/png, image/webp, image/jpeg"
      />
    </div>
  );
}

export default UploadAvatar;
