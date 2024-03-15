import { ReactNode } from "react";
import styles from "./noBlurPopup.module.scss";
import { HiMiniXMark } from "react-icons/hi2";
import { PaddingType } from "../../../utils/types";

type NoBlurPopupProps = {
  children: ReactNode;
  handleClose?: () => void;
  padding?: PaddingType;
  maxWidth?: number;
  additionalStyles?: object;
};

function NoBlurPopup({
  children,
  handleClose,
  padding = { top: 6.4, bottom: 6.4, left: 3.2, right: 3.2 },
  maxWidth = 80,
  additionalStyles = {},
}: NoBlurPopupProps) {
  const popupStyles = {
    padding: `${padding.top}rem ${padding.right}rem ${padding.bottom}rem ${padding.left}rem`,
    maxWidth: `${maxWidth}rem`,
    ...additionalStyles,
  };

  return (
    <div style={popupStyles} className={styles.container}>
      <button onClick={handleClose} className={styles.close}>
        <HiMiniXMark />
      </button>
      {children}
    </div>
  );
}

export default NoBlurPopup;
