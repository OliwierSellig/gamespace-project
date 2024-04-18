import UserSettingsButton from "../userSettingButton/UserSettingsButton";
import styles from "./profileOptions.module.scss";

function ProfileOptions() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>My Profile</p>
      <UserSettingsButton />
    </div>
  );
}

export default ProfileOptions;
