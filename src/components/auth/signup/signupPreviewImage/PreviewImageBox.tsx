import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HiOutlineGlobeEuropeAfrica,
  HiOutlinePencilSquare,
  HiOutlineUser,
} from "react-icons/hi2";
import notFound from "../../../../../public/img/not-found.png";
import styles from "./previewImageBox.module.scss";

type SingupPreviewImageProps = {
  file: File | string;
  type?: "avatar" | "background";
  size?: "lg" | "sm";
};

function PreviewImageBox({
  file,
  type = "avatar",
  size = "lg",
}: SingupPreviewImageProps) {
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
  return (
    <div
      className={`${styles.container} ${styles[`container__${type}`]} ${styles[`container__${size}`]}`}
    >
      {!preview &&
        (type === "avatar" ? (
          <HiOutlineUser />
        ) : (
          <HiOutlineGlobeEuropeAfrica />
        ))}
      {preview && (
        <div className={styles.box}>
          <div className={styles.edit}>
            <HiOutlinePencilSquare />
          </div>
          <Image
            fill
            sizes="10vw"
            src={(preview as string) || notFound}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default PreviewImageBox;
