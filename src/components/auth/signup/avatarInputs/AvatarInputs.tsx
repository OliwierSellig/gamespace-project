import SkipStepButton from "../skipStepButton/SkipStepButton";
import UserAvatarInput from "../userAvatarInput/UserAvatarInput";
import UserBackgroundInput from "../userBackgroundInput/UserBackgroundInput";
import styles from "./avatarInputs.module.scss";

type AvatarInputsProps = {
  skipStep: () => void;
  setFormValue: (
    value:
      | { type: "gamespaceName"; content: string }
      | { type: "avatar" | "background"; content: File },
  ) => void;
};

function AvatarInputs({ skipStep, setFormValue }: AvatarInputsProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>How your account should look?</h2>
      <div className={styles.row}>
        <UserAvatarInput
          setAvatar={(avatar) =>
            setFormValue({ type: "avatar", content: avatar })
          }
        />
        <UserBackgroundInput
          setBackground={(background) =>
            setFormValue({ type: "background", content: background })
          }
        />
      </div>
      <SkipStepButton handleClick={skipStep} />
    </div>
  );
}

export default AvatarInputs;
