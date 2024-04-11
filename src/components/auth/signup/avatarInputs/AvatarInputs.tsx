import SkipStepButton from "../skipStepButton/SkipStepButton";
import UserAvatarInput from "../userAvatarInput/UserAvatarInput";
import UserBackgroundInput from "../userBackgroundInput/UserBackgroundInput";
import styles from "./avatarInputs.module.scss";

function AvatarInputs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>How your account should look?</h2>
      <div className={styles.row}>
        <UserAvatarInput />
        <UserBackgroundInput />
      </div>
      <SkipStepButton />
    </div>
  );
}

export default AvatarInputs;
