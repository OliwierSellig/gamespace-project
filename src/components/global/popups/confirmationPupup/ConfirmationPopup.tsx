import { ReactNode, useState } from "react";
import Button from "../../button/Button";
import NoBlurPopup from "../noBlurPopup/NoBlurPopup";
import styles from "./confirmationPopup.module.scss";

type ConfirmationPopupProps = {
  children: ReactNode;
  actionButtonText?: string;
  handleClick?: () => Promise<void>;
  onCloseModal?: () => void;
};

function ConfirmationPopup({
  children,
  actionButtonText = "Delete",
  handleClick,
  onCloseModal,
}: ConfirmationPopupProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
            isLoading={isLoading}
            handleClick={async () => {
              setIsLoading(true);
              try {
                await handleClick?.();
                onCloseModal();
              } finally {
                setIsLoading(false);
              }
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
