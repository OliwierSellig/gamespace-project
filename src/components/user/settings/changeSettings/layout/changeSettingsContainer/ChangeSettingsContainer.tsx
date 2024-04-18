import { useEffect, useRef, useState } from "react";
import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import ActionButtons from "../actionButtons/ActionButtons";
import ChangeSettingsHeader from "../changeSettingsHeader/ChangeSettingsHeader";
import ChangeSettingsSwiper from "../changeSettingsSwiper/ChangeSettingsSwiper";
import UnsavedChanges from "../unsavedChanges/UnsavedChanges";
import styles from "./changeSettingsContainer.module.scss";

function ChangeSettingsContainer() {
  const { leaveUserSettings } = useUserSettings();

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  function setSlide(num: number) {
    setCurrentSlide(num);
  }

  // useEffect(() => {
  //   function clickOutside(e: MouseEvent) {
  //     if (
  //       containerRef.current &&
  //       !containerRef.current.contains(e.target as Node)
  //     ) {
  //       leaveUserSettings();
  //     }
  //   }
  //   addEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
  //   return () =>
  //     removeEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
  // }, [leaveUserSettings]);

  return (
    <div ref={containerRef} className={styles.container}>
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
