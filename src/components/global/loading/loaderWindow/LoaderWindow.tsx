import { ReactNode } from "react";
import Loader from "../loader/Loader";
import styles from "./loaderWindow.module.scss";

type LoaderWindowProps = {
  width?: string;
  height?: string;
  children?: ReactNode;
};

function LoaderWindow({
  width = "100vw",
  height = "100vh",
  children,
}: LoaderWindowProps) {
  return (
    <div className={styles.container} style={{ width: width, height: height }}>
      <Loader />
      <p className={styles.text}>{children}</p>
    </div>
  );
}

export default LoaderWindow;
