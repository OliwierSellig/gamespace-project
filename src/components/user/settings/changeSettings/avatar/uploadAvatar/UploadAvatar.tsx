import { HiOutlinePencilSquare } from "react-icons/hi2";
import PreviewImageBox from "../../../../../auth/signup/signupPreviewImage/PreviewImageBox";
import styles from "./uploadAvatar.module.scss";

function UploadAvatar() {
  return (
    <div className={styles.container}>
      <label className={styles.label__image} htmlFor="avatar">
        <PreviewImageBox size="sm" file="" />
      </label>
      <label className={styles.label__btn} htmlFor="avatar">
        <span>Upload New</span>
        <HiOutlinePencilSquare />
      </label>
      <input className={styles.input} id="avatar" type="file" />
    </div>
  );
}

export default UploadAvatar;
