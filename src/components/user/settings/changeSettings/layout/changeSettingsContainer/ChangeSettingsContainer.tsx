import { useState } from "react";
import ActionButtons from "../actionButtons/ActionButtons";
import ChangeSettingsHeader from "../changeSettingsHeader/ChangeSettingsHeader";
import ChangeSettingsSwiper from "../changeSettingsSwiper/ChangeSettingsSwiper";
import CloseSettingsButton from "../closeSettingsButton/CloseSettingsButton";
import UnsavedChanges from "../unsavedChanges/UnsavedChanges";
import styles from "./changeSettingsContainer.module.scss";

function ChangeSettingsContainer() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  function setSlide(num: number) {
    setCurrentSlide(num);
  }

  return (
    <div className={styles.container}>
      <CloseSettingsButton />
      <ChangeSettingsHeader currentSlide={currentSlide} setSlide={setSlide} />
      <ChangeSettingsSwiper
        currentSlide={currentSlide}
        setSlide={setCurrentSlide}
      />
      <ActionButtons />
      <UnsavedChanges />
    </div>
  );
}

export default ChangeSettingsContainer;
