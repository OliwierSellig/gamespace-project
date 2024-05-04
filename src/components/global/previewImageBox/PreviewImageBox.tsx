import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HiOutlineGlobeEuropeAfrica,
  HiOutlinePencilSquare,
  HiOutlineUser,
} from "react-icons/hi2";
import notFound from "../../../../public/img/not-found.png";
import styles from "./previewImageBox.module.scss";

type PreviewImageBoxProps = {
  file: File | string;
  type?: "avatar" | "background";
  size?: "lg" | "sm";
};

function PreviewImageBox({
  file,
  type = "avatar",
  size = "lg",
}: PreviewImageBoxProps) {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  useEffect(() => {
    if (file && typeof file !== "string") {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreview(reader.result);
      };
    }
  }, [file]);

  const imageSource: string =
    (typeof file === "string" ? file : (preview as string)) || notFound;

  return (
    <div
      className={`${styles.container} ${!preview ? styles.container__empty : ""} ${styles[`container__${type}`]} ${styles[`container__${size}`]}`}
    >
      {!preview &&
        (type === "avatar" ? (
          <HiOutlineUser />
        ) : (
          <HiOutlineGlobeEuropeAfrica />
        ))}
      {(preview || typeof file === "string") && (
        <div className={styles.box}>
          <div className={styles.edit}>
            <HiOutlinePencilSquare />
          </div>
          <Image fill sizes="10vw" src={imageSource} alt="" />
        </div>
      )}
    </div>
  );
}

export default PreviewImageBox;
