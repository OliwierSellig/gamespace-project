import {
  HiOutlinePlusCircle,
  HiOutlineBookmark,
  HiOutlineFolderPlus,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import Link from "next/link";
import styles from "./gameAction.module.scss";
import Image from "next/image";
import notFound from "./../../../public/img/not-found.png";
import { SingleGameItem } from "../../utils/types";

type GameActionProps = {
  game: SingleGameItem;
  topYear: string;
  topGenre: string;
};

function GameAction({ game, topGenre, topYear }: GameActionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <Image
          src={`${game?.background_image}` || notFound}
          alt={`${game?.name || "Untitled Game"} Cover`}
          fill
          sizes="40vw"
        />
      </div>
      <p className={styles.smallDetails}>
        {game.released || "Unknown Release Date"} - Average Playtime:{" "}
        {game.playtime ? `${game.playtime} hours` : "Not defined"}
      </p>
      <h1 className={styles.title}>{game?.name || "Untitled Game"}</h1>
      <div className={styles.actionBtns}>
        <button className={`${styles.btn__add} ${styles.btn}`}>
          <span>Add to My Games</span>
          <HiOutlinePlusCircle />
        </button>
        <button className={`${styles.btn__wishlist} ${styles.btn}`}>
          <span>Add to Wishlist</span>
          <HiOutlineBookmark />
        </button>
        <button className={`${styles.btn__collections} ${styles.btn}`}>
          Save to Collection
          <HiOutlineFolderPlus />
          {/* <CollectionsPopup
            openCollections={openCollections}
            setOpenCollections={setOpenCollections}
          /> */}
        </button>
      </div>
      <div className={styles.rating}>
        <div className={styles.rating__chart}>
          <span className={styles.rating__chart__upper}>
            {game.ratings && game.ratings.length > 0
              ? `${game?.ratings.at(0).title.at(0).toUpperCase()}${game.ratings
                  .at(0)
                  .title.slice(1)}`
              : `Undefined`}
          </span>
          <span className={styles.rating__chart__lower}>
            {game.reviews_count || `Undefined`} Ratings
          </span>
        </div>
        <div className={styles.rating__chart}>
          <span className={styles.rating__chart__upper}>
            #{topGenre || "0"}
          </span>
          <span className={styles.rating__chart__lower}>
            {game.genres?.at(0)?.name || "Genre"}
          </span>
        </div>
        <div className={styles.rating__chart}>
          <span className={styles.rating__chart__upper}>#{topYear || "0"}</span>
          <span className={styles.rating__chart__lower}>
            Top {new Date(game.released)?.getFullYear() || "Year"}
          </span>
        </div>
      </div>
      <Link className={`${styles.btn__review} ${styles.btn}`} href={`reviews`}>
        <span>Write a review</span>
        <HiOutlinePencilSquare />
      </Link>
      <div className={styles.buy}>
        <header className={styles.buy__header}>Where to buy:</header>
        <nav className={styles.buy__list}>
          {game.stores &&
            game.stores.map((item) => (
              <Link
                href={item.store?.domain || ""}
                key={item.id}
                className={styles.buy__link}
              >
                {item.store.name}
              </Link>
            ))}
        </nav>
      </div>
    </div>
  );
}

export default GameAction;
