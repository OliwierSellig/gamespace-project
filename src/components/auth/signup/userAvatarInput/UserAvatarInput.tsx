import { Field } from "formik";
import { HiOutlineUser } from "react-icons/hi2";
import FileInput from "../../../global/fileInput/FileInput";
import styles from "./userAvatarInput.module.scss";

function UserAvatarInput() {
  return (
    <label className={styles.container}>
      <Field name="avatar" component={FileInput} />
      <div className={styles.box}>
        <HiOutlineUser />
      </div>
      <span className={styles.text}>User Avatar</span>
    </label>
  );
}

export default UserAvatarInput;
