import PreviousAvatars from "../previousAvatars/PreviousAvatars";
import UploadAvatar from "../uploadAvatar/UploadAvatar";
import styles from "./changeAvatarContainer.module.scss";

function ChangeAvatarContainer() {
  return (
    <div className={styles.container}>
      <UploadAvatar />
      <PreviousAvatars />
    </div>
  );
}

export default ChangeAvatarContainer;
