import PreviousAvatarsList from "../previousAvatarsList/PreviousAvatarsList";
import styles from "./previousAvatars.module.scss";

function PreviousAvatars() {
  return (
    <div>
      <p className={styles.heading}>Or, choose from your past pictures</p>
      <PreviousAvatarsList />
    </div>
  );
}

export default PreviousAvatars;
