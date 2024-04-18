"use client";

import { useState } from "react";
import { UserSettingsProvider } from "../../../../../../contexts/UserSettingsContext";
import ActionButtons from "../actionButtons/ActionButtons";
import ChangeSettingsHeader from "../changeSettingsHeader/ChangeSettingsHeader";
import ChangeSettingsSwiper from "../changeSettingsSwiper/ChangeSettingsSwiper";
import UnsavedChanges from "../unsavedChanges/UnsavedChanges";
import styles from "./changeSettingPopup.module.scss";

function ChangeSettingsPopup() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  function setSlide(num: number) {
    setCurrentSlide(num);
  }

  return (
    <UserSettingsProvider>
      <div className={styles.background}>
        <div className={styles.container}>
          <ChangeSettingsHeader
            currentSlide={currentSlide}
            setSlide={setSlide}
          />
          <ChangeSettingsSwiper
            currentSlide={currentSlide}
            setSlide={setCurrentSlide}
          />
          <ActionButtons />
          <UnsavedChanges />
        </div>
      </div>
    </UserSettingsProvider>
  );
}

export default ChangeSettingsPopup;
