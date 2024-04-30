import { useMediaQuery } from "react-responsive";
import { useUser } from "../../../../../../contexts/UserContext";
import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import EmptyImageBox from "../../layout/emptyImageBox/EmptyImageBox";
import PreviousImageBox from "../../layout/previousImageBox/PreviousImageBox";
import styles from "./previousAvatarsList.module.scss";

function PreviousAvatarsList() {
  const { state } = useUser();
  const { setNewAvatar } = useUserSettings();
  const isBigScreen = useMediaQuery({ query: "(min-width: 480px)" });
  const previousImages = state.profileSettings.recentAvatars;
  const maxLength = isBigScreen ? 6 : 4;
  const emptySlotsCount = Math.max(0, maxLength - previousImages?.length || 0);
  if (!previousImages) return null;

  return (
    <ul className={styles.list}>
      {previousImages.slice(0, maxLength).map((image, i) => (
        <li key={i}>
          <PreviousImageBox
            handleClick={(image) => setNewAvatar(image)}
            image={image}
          />
        </li>
      ))}

      {Array.from({ length: emptySlotsCount }, (_, i) => (
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
