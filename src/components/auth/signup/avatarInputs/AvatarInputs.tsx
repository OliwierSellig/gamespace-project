import SignupImageInput from "../signupImageInput/SignupImageInput";
import SkipStepButton from "../skipStepButton/SkipStepButton";
import styles from "./avatarInputs.module.scss";

type AvatarInputsProps = {
  skipStep: () => void;
  setImage: (type: "avatar" | "background", file: File) => void;
  avatar: File;
  background: File;
};

function AvatarInputs({
  skipStep,
  setImage,
  avatar,
  background,
}: AvatarInputsProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>How your account should look?</h2>
      <div className={styles.row}>
        <SignupImageInput
          handleInputChange={(file) => setImage("avatar", file)}
          type="avatar"
          file={avatar}
        >
          User Avatar
        </SignupImageInput>
        <SignupImageInput
          handleInputChange={(file) => setImage("background", file)}
          type="background"
          file={background}
        >
          User Background
        </SignupImageInput>
      </div>
      <SkipStepButton handleClick={skipStep} />
    </div>
  );
}

export default AvatarInputs;
