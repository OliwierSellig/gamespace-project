import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import EmptyImageBox from "../../layout/emptyImageBox/EmptyImageBox";
import PreviousImageBox from "../../layout/previousImageBox/PreviousImageBox";
import styles from "./previousBackgroundsList.module.scss";

function PreviousBackgroundsList() {
  const { setNewBackground } = useUserSettings();
  return (
    <ul className={styles.list}>
      {Array.from({ length: 1 }, (_, i) => (
        <PreviousImageBox
          handleClick={(file) => setNewBackground(file)}
          key={i}
          image=""
          type="background"
        />
      ))}
      {Array.from({ length: 2 }, (_, i) => (
        <EmptyImageBox
          handleChange={(e) => setNewBackground(e.currentTarget.files[0])}
          key={i}
          id={`set-background-${i}`}
          type="background"
        />
      ))}
    </ul>
  );
}

export default PreviousBackgroundsList;
