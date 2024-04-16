"use client";

import ActionButtons from "../actionButtons/ActionButtons";
import ChangeSettingsHeader from "../changeSettingsHeader/ChangeSettingsHeader";
import ChangeSettingsSwiper from "../changeSettingsSwiper/ChangeSettingsSwiper";
import styles from "./changeSettingPopup.module.scss";

function ChangeSettingsPopup() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <ChangeSettingsHeader />
        <ChangeSettingsSwiper />
        <ActionButtons />
      </div>
    </div>
  );
}

export default ChangeSettingsPopup;
