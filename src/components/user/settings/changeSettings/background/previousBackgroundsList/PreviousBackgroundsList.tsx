import { useMediaQuery } from "react-responsive";
import { useUser } from "../../../../../../contexts/userContext/UserContext";
import { useUserSettings } from "../../../../../../contexts/userSettingsContext/UserSettingsContext";
import EmptyImageBox from "../../layout/emptyImageBox/EmptyImageBox";
import PreviousImageBox from "../../layout/previousImageBox/PreviousImageBox";
import styles from "./previousBackgroundsList.module.scss";

function PreviousBackgroundsList() {
  const { state } = useUser();
  const { setNewBackground } = useUserSettings();
  const isBigScreen = useMediaQuery({ query: "(min-width: 480px)" });
  const previousImages = state.profileSettings.recentBackgrounds;

  const maxLength = isBigScreen ? 3 : 2;
  const emptySlotsCount = Math.max(0, maxLength - previousImages?.length || 0);
  if (!previousImages) return null;
  return (
    <ul className={styles.list}>
      {previousImages.slice(0, maxLength).map((image, i) => (
        <li key={i}>
          <PreviousImageBox
            handleClick={(image) => setNewBackground(image)}
            image={image}
            type="background"
          />
        </li>
      ))}
      {Array.from({ length: emptySlotsCount }, (_, i) => (
        <li key={i}>
          <EmptyImageBox
            id={`New background ${i}`}
            type="background"
            handleChange={(e) => {
              setNewBackground(e.currentTarget.files[0]);
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export default PreviousBackgroundsList;
