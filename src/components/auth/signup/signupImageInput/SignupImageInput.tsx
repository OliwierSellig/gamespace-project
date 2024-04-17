import { ReactNode } from "react";
import PreviewImageBox from "../signupPreviewImage/PreviewImageBox";
import styles from "./signupImageInput.module.scss";

type SingupImageInputProps = {
  children: ReactNode;
  type: "avatar" | "background";
  file: File;
  handleInputChange: (file: File) => void;
};

function SignupImageInput({
  children,
  type,
  file,
  handleInputChange,
}: SingupImageInputProps) {
  return (
    <label htmlFor={type} className={styles.container}>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.currentTarget.files && e.currentTarget.files[0];
          handleInputChange(file);
        }}
        type="file"
        accept="image/jpg, image/png, image/webp, image/jpeg"
        id={type}
      />
      <PreviewImageBox file={file} type={type} />
      <span className={styles.text}>{children}</span>
    </label>
  );
}

export default SignupImageInput;
