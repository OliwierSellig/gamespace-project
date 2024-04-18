import { useMediaQuery } from "react-responsive";
import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import EmptyImageBox from "../../layout/emptyImageBox/EmptyImageBox";
import PreviousImageBox from "../../layout/previousImageBox/PreviousImageBox";
import styles from "./previousBackgroundsList.module.scss";

function PreviousBackgroundsList() {
  const { setNewBackground } = useUserSettings();
  const isBigScreen = useMediaQuery({ query: "(min-width: 480px)" });
  return (
    <ul className={styles.list}>
      {Array.from({ length: 1 }, (_, i) => (
        <li key={i}>
          <PreviousImageBox
            handleClick={(file) => setNewBackground(file)}
            image=""
            type="background"
          />
        </li>
      ))}
      {Array.from({ length: isBigScreen ? 2 : 1 }, (_, i) => (
        <li key={i}>
          <EmptyImageBox
            handleChange={(e) => setNewBackground(e.currentTarget.files[0])}
            id={`set-background-${i}`}
            type="background"
          />
        </li>
      ))}
    </ul>
  );
}

export default PreviousBackgroundsList;
