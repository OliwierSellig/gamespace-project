import Image from "next/image";
import styles from "./fullDescription.module.scss";
import notFound from "./../../../../public/img/not-found.png";
import { HiOutlineBookmark, HiOutlinePlusCircle } from "react-icons/hi2";
import { SingleGameItem } from "../../../utils/types";

type FullDescriptionProps = {
  game: SingleGameItem;
};

function FullDescription({ game }: FullDescriptionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={game.background_image || notFound}
          alt={game.name ? `${game.name} Cover` : "Undefined Game Cover"}
          fill
          sizes="(max-width: 1200px) 95vw, (max-width: 1660px) 35vw, 700px"
        />
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{game.name || "Undefined Game"}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: game.description }}
            className={styles.description}
          />
          <nav className={styles.btns}>
            <button className={`${styles.btn__add} ${styles.btn}`}>
              <span>Add to My Games</span>
              <HiOutlinePlusCircle />
            </button>
            <button className={`${styles.btn__wishlist} ${styles.btn}`}>
              <span>Add to Wishlist</span>
              <HiOutlineBookmark />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default FullDescription;