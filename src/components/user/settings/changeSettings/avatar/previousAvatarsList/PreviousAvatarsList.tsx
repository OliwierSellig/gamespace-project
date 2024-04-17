import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import EmptyImageBox from "../../layout/emptyImageBox/EmptyImageBox";
import PreviousImageBox from "../../layout/previousImageBox/PreviousImageBox";
import styles from "./previousAvatarsList.module.scss";

function PreviousAvatarsList() {
  const { setNewAvatar } = useUserSettings();
  return (
    <ul className={styles.list}>
      {Array.from({ length: 3 }, (_, i) => (
        <PreviousImageBox
          handleClick={(file) => setNewAvatar(file)}
          key={i}
          image=""
        />
      ))}
      {Array.from({ length: 3 }, (_, i) => (
        <EmptyImageBox
          key={i}
          id={`New avatar ${i}`}
          handleChange={(e) => {
            setNewAvatar(e.currentTarget.files[0]);
          }}
        />
      ))}
    </ul>
  );
}

export default PreviousAvatarsList;
