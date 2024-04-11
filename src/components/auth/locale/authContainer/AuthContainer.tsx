import { ReactNode } from "react";
import ReturnButton from "../../../global/returnButton/ReturnButton";
import AccountCta from "../accountCta/AccountCta";
import styles from "./authContainer.module.scss";

type AuthContainerProps = {
  children: ReactNode;
  ctaType: "login" | "register";
};

function AuthContainer({ children, ctaType }: AuthContainerProps) {
  return (
    <div className={styles.container}>
      <ReturnButton href="/" />
      <div className={styles.box}>
        <>
          {children}
          <AccountCta type={ctaType} />
        </>
      </div>
    </div>
  );
}

export default AuthContainer;
