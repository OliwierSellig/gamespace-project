import { ReactNode } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import Button from "./Button";
import styles from "./confirmationPopup.module.scss";

type ConfirmationPopupProps = {
  children: ReactNode;
  actionButtonText?: string;
  handleClick?: () => void;
  onCloseModal?: () => void;
};

function ConfirmationPopup({
  children,
  actionButtonText = "Delete",
  handleClick,
  onCloseModal,
}: ConfirmationPopupProps) {
  return (
    <div className={styles.container}>
      <button onClick={onCloseModal} className={styles.close}>
        <HiMiniXMark />
      </button>
      <p className={styles.main}>Are you sure?</p>
      <p className={styles.sub}>{children}</p>
      <nav className={styles.btns}>
        <Button
          style={{ name: "fill", shade: "white" }}
          sizeX="xl"
          borderRadius="sm"
          handleClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          handleClick={() => {
            handleClick?.();
            onCloseModal();
          }}
          style={{ name: "opacity", shade: "red" }}
          sizeX="xl"
          borderRadius="sm"
        >
          {actionButtonText}
        </Button>
      </nav>
    </div>
  );
}

export default ConfirmationPopup;
