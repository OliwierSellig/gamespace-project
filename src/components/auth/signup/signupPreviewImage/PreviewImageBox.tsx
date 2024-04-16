import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HiOutlineGlobeEuropeAfrica,
  HiOutlinePencilSquare,
  HiOutlineUser,
} from "react-icons/hi2";
import styles from "./previewImageBox.module.scss";

type SingupPreviewImageProps = {
  file: File;
  type: "avatar" | "background";
};

function PreviewImageBox({ file, type }: SingupPreviewImageProps) {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreview(reader.result);
      };
    }
  }, [file]);
  return (
    <div className={`${styles.container} ${styles[`container__${type}`]}`}>
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
          <Image fill sizes="10vw" src={preview as string} alt="" />
        </div>
      )}
    </div>
  );
}

export default PreviewImageBox;
