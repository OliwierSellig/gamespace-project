import { useRef } from "react";
import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import ChangeSettingsContainer from "../changeSettingsContainer/ChangeSettingsContainer";
import styles from "./changeSettingPopup.module.scss";

function ChangeSettingsPopup() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { leaveUserSettings } = useUserSettings();
  return (
    <div
      ref={backgroundRef}
      onClick={(e) => {
        if (backgroundRef.current && e.target === backgroundRef.current)
          leaveUserSettings();
      }}
      className={styles.background}
    >
      <ChangeSettingsContainer />
    </div>
  );
}

export default ChangeSettingsPopup;
