import Image from "next/image";
import styles from "./overviewVideo.module.scss";
import background from "../../../../../../public/img/game-data-background.jpg";

function OverviewVideo() {
  return (
    <div className={styles.container}>
      <video
        src={
          "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/geralt-meditation-1.mp4?alt=media&token=accc63dc-f229-4992-804b-7c8f66b82ecf"
        }
        autoPlay
        loop
      />
      <Image alt="" src={background} sizes="100vw" fill />
    </div>
  );
}

export default OverviewVideo;
