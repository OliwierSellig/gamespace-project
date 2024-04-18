import { useMediaQuery } from "react-responsive";
import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import EmptyImageBox from "../../layout/emptyImageBox/EmptyImageBox";
import PreviousImageBox from "../../layout/previousImageBox/PreviousImageBox";
import styles from "./previousAvatarsList.module.scss";

function PreviousAvatarsList() {
  const { setNewAvatar } = useUserSettings();
  const isBigScreen = useMediaQuery({ query: "(min-width: 480px)" });
  return (
    <ul className={styles.list}>
      {Array.from({ length: isBigScreen ? 3 : 2 }, (_, i) => (
        <li key={i}>
          <PreviousImageBox
            handleClick={(file) => setNewAvatar(file)}
            image=""
          />
        </li>
      ))}
      {Array.from({ length: isBigScreen ? 3 : 2 }, (_, i) => (
        <li key={i}>
          <EmptyImageBox
            id={`New avatar ${i}`}
            handleChange={(e) => {
              setNewAvatar(e.currentTarget.files[0]);
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export default PreviousAvatarsList;
