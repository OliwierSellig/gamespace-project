import Image from "next/image";
import { ReactNode } from "react";
import notFound from "../../../../public/img/not-found.png";
import styles from "./gameBackgroundLayout.module.scss";

type GameBackgroundLayout = {
  image: string;
  children: ReactNode;
};

function GameBackgroundLayout({ image, children }: GameBackgroundLayout) {
  return (
    <div className={styles.container}>
      <>
        <div className={styles.background}>
          <Image src={image || notFound} alt="" fill sizes="100vw" />
        </div>
        {children}
      </>
    </div>
  );
}

export default GameBackgroundLayout;
