import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import BackgroundCurrentCover from "../backgroundCurrentCover/BackgroundCurrentCover";
import PreviousBackgrounds from "../previousBackgrounds/PreviousBackgrounds";
import UploadNewBackground from "../uploadNewBackground/UploadNewBackground";
import styles from "./updateBackgroundContainer.module.scss";

function UpdateBackgroundContainer() {
  const { background } = useUserSettings();
  return (
    <div className={styles.container}>
      <UploadNewBackground id="background" />
      <PreviousBackgrounds />
      <BackgroundCurrentCover image={background} />
    </div>
  );
}

export default UpdateBackgroundContainer;
