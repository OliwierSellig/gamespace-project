import { ReactNode } from "react";
import styles from "./userBoxLayout.module.scss";

type UserBoxLayoutProps = {
  size?: "md" | "lg";
  children: ReactNode;
};

function UserBoxLayout({ size = "md", children }: UserBoxLayoutProps) {
  return (
    <div className={`${styles.container} ${styles[`container__${size}`]}`}>
      {children}
    </div>
  );
}

export default UserBoxLayout;
