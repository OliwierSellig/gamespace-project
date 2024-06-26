import Image from "next/image";
import { useEffect, useState } from "react";
import defaultBackground from "../../../../../../../public/img/not-found.png";

type BackgroundCurrentCoverProps = {
  image: File | string;
};

function BackgroundCurrentCover({ image }: BackgroundCurrentCoverProps) {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  useEffect(() => {
    if (!image) return;
    if (typeof image === "string") {
      setPreview(image);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }, [image]);

  return (
    <Image
      sizes="(max-width: 720px) 95vw, 80rem"
      src={preview || defaultBackground}
      alt="User Background"
      fill
    />
  );
}

export default BackgroundCurrentCover;
