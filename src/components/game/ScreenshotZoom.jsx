import { useRef } from "react";
import styles from "./screenshotZoom.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useGame } from "../../contexts/GameContext";

function ScreenshotZoom() {
  const backgrounRef = useRef();
  const navigate = useNavigate();
  const { id, screenshot } = useParams();
  const { screenshotsList } = useGame();
  const zoomedShot = screenshotsList.find(
    (shot) => shot.id === Number(screenshot)
  ).image;

  return (
    <div
      ref={backgrounRef}
      className={styles.background}
      onClick={(e) => {
        if (e.target === backgrounRef.current) navigate(-1);
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
