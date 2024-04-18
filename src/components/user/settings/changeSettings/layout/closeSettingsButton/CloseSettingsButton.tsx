import { HiMiniXMark } from "react-icons/hi2";
import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import styles from "./closeSettingsButton.module.scss";

function CloseSettingsButton() {
  const { leaveUserSettings } = useUserSettings();

  return (
    <button
      className={styles.btn}
      aria-label="Close User Settings"
      onClick={leaveUserSettings}
    >
      <HiMiniXMark />
    </button>
  );
}

export default CloseSettingsButton;
