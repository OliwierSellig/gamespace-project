import { Field } from "formik";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import FileInput from "../../../global/fileInput/FileInput";
import styles from "./userBackgroundInput.module.scss";

function UserBackgroundInput() {
  return (
    <label className={styles.container}>
      <Field name="background" component={FileInput} />
      <div className={styles.box}>
        <HiOutlineGlobeEuropeAfrica />
      </div>
      <span className={styles.text}>User Background</span>
    </label>
  );
}

export default UserBackgroundInput;
