import styles from "./gameBackground.module.scss";
import noGameFound from "../../../public/img/not-found.png";
import { ReactNode } from "react";
import Image from "next/image";

type GameBackgroundProps = {
  cover: string;
  children: ReactNode;
};

function GameBackground({ cover, children }: GameBackgroundProps) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.background__cover}>
          <Image src={cover || noGameFound} alt="" fill sizes="100vw" />
        </div>
        <div className={styles.background__box} />
      </div>
      <main className={styles.box}>{children}</main>
    </div>
  );
}

export default GameBackground;
