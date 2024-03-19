import { ReactNode } from "react";
import Button from "../button/Button";
import styles from "./confirmationPopup.module.scss";
import NoBlurPopup from "./NoBlurPopup";

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
    <NoBlurPopup handleClose={onCloseModal}>
      <div className={styles.container}>
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
    </NoBlurPopup>
  );
}

export default ConfirmationPopup;
