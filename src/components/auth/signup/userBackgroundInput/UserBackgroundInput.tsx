import { Field } from "formik";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import FileInput from "../../../global/fileInput/FileInput";
import styles from "./userBackgroundInput.module.scss";

type UserBackgroundInputProps = {
  setBackground: (background: File) => void;
};

function UserBackgroundInput({ setBackground }: UserBackgroundInputProps) {
  return (
    <label className={styles.container}>
      <Field
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const file =
            event.currentTarget.files && event.currentTarget.files[0];
          console.log(event);
          setBackground(file);
        }}
        name="background"
        component={FileInput}
      />
      <div className={styles.box}>
        <HiOutlineGlobeEuropeAfrica />
      </div>
      <span className={styles.text}>User Background</span>
    </label>
  );
}

export default UserBackgroundInput;
