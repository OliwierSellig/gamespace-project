import Image from "next/image";
import styles from "./overviewVideo.module.scss";
import background from "../../../../../public/img/md.jpg";

function OverviewVideo() {
  return (
    <div className={styles.container}>
      <video
        src={
          "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/geralt-meditation-1.mp4?alt=media&token=accc63dc-f229-4992-804b-7c8f66b82ecf"
        }
        muted
        autoPlay
        loop
      />
      <Image alt="" src={background} fill />
    </div>
  );
}

export default OverviewVideo;
