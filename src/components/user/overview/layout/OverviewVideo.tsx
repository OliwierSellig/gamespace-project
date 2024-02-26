import styles from "./overviewVideo.module.scss";
import overviewVideo from "./../../../../../public/video/cdp.mp4";

function OverviewVideo() {
  return (
    <div className={styles.container}>
      <video src={overviewVideo} muted autoPlay loop />
    </div>
  );
}

export default OverviewVideo;
