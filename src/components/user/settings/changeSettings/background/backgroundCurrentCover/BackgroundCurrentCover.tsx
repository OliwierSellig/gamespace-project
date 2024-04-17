import Image from "next/image";
import { useEffect, useState } from "react";
import defaultBackground from "../../../../../../../public/img/user-background.jpg";

type BackgroundCurrentCoverProps = {
  image: File;
};

function BackgroundCurrentCover({ image }: BackgroundCurrentCoverProps) {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        setPreview(reader.result);
      };
    }
  }, [image]);
  return (
    <Image src={preview || defaultBackground} alt="User Background" fill />
  );
}

export default BackgroundCurrentCover;
