import Image from "next/image";
import backgrondImage from "../../../../../../../public/img/user-background.jpg";
import PreviousBackgrounds from "../previousBackgrounds/PreviousBackgrounds";
import UploadNewBackground from "../uploadNewBackground/UploadNewBackground";
import styles from "./updateBackgroundContainer.module.scss";

function UpdateBackgroundContainer() {
  return (
    <div className={styles.container}>
      <UploadNewBackground id="background" />
      <PreviousBackgrounds />
      <Image src={backgrondImage} alt="" fill />
    </div>
  );
}

export default UpdateBackgroundContainer;
