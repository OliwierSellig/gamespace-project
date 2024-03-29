import { ReactNode } from "react";
import styles from "./userBoxLayout.module.scss";

type UserBoxLayoutProps = {
  padding?: { top: number; bottom: number; left: number; right: number };
  children: ReactNode;
  additionalStyles?: object;
};

function UserBoxLayout({
  additionalStyles = {},
  padding = { top: 1.8, bottom: 1.8, left: 3.2, right: 3.2 },
  children,
}: UserBoxLayoutProps) {
  const boxStyles = {
    paddingTop: `${padding.top}rem`,
    paddingBottom: `${padding.bottom}rem`,
    paddingLeft: `${padding.left}rem`,
    paddingRight: `${padding.right}rem`,
    ...additionalStyles,
  };

  return (
    <div style={boxStyles} className={styles.container}>
      {children}
    </div>
  );
}

export default UserBoxLayout;
