import { Field } from "formik";
import { HiOutlineUser } from "react-icons/hi2";
import FileInput from "../../../global/fileInput/FileInput";
import styles from "./userAvatarInput.module.scss";

type UserAvatarInputProps = {
  setAvatar: (avatar: File) => void;
};

function UserAvatarInput({ setAvatar }: UserAvatarInputProps) {
  return (
    <label className={styles.container}>
      <Field
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const file =
            event.currentTarget.files && event.currentTarget.files[0];
          setAvatar(file);
        }}
        name="avatar"
        component={FileInput}
      />
      <div className={styles.box}>
        <HiOutlineUser />
      </div>
      <span className={styles.text}>User Avatar</span>
    </label>
  );
}

export default UserAvatarInput;
