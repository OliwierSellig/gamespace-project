"use client";

import { useRef } from "react";
import styles from "./screenshotZoom.module.scss";
import { useParams, useRouter } from "next/navigation";
import { useGame } from "../../contexts/GameContext";

function ScreenshotZoom() {
  const backgrounRef = useRef();
  const { screenshot } = useParams();
  const { screenshotsList } = useGame();
  const zoomedShot = screenshotsList.find(
    (shot) => shot.id === Number(screenshot)
  ).image;
  const router = useRouter();

  return (
    <div
      ref={backgrounRef}
      className={styles.background}
      onClick={(e) => {
        if (e.target === backgrounRef.current) router.back();
      }}
    >
      <div className={styles.container}>
        {zoomedShot && (
          <img className={styles.img} src={zoomedShot} alt="Screenshot" />
        )}
      </div>
    </div>
  );
}

export default ScreenshotZoom;
