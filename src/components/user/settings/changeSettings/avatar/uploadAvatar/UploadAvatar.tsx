import { HiOutlinePencilSquare, HiOutlineUser } from "react-icons/hi2";
import styles from "./uploadAvatar.module.scss";

function UploadAvatar() {
  return (
    <div className={styles.container}>
      <label className={styles.label__image} htmlFor="avatar">
        <HiOutlineUser />
      </label>
      <label className={styles.label__button} htmlFor="avatar">
        <span>Upload New</span>
        <HiOutlinePencilSquare />
      </label>
      <input id="avatar" type="file" />
    </div>
  );
}

export default UploadAvatar;
