import Image from "next/image";
import { ReactNode } from "react";
import styles from "./gameLayout.module.scss";
import notFound from "../../../../public/img/not-found.png";
import { fetchGameByID } from "../../../lib/games";
import PageNotFound from "../../global/PageNotFound";

type GameLayoutProps = {
  id: string;
  children: ReactNode;
};

async function GameLayout({ id, children }: GameLayoutProps) {
  const game = await fetchGameByID(parseInt(id));

  if (!game?.id) return <PageNotFound />;

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.background__cover}>
          <Image
            src={game?.background_image_additional || notFound}
            alt=""
            fill
            sizes="100vw"
          />
        </div>
        <div className={styles.background__box} />
      </div>
      <div className={styles.box}>{children}</div>
    </div>
  );
}

export default GameLayout;
