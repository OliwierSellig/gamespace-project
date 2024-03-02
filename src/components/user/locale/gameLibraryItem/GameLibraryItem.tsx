import styles from "./gameLibraryItem.module.scss";
import notFound from "../../../../../public/img/not-found.png";
import Image from "next/image";
import { IconType } from "react-icons";
import { HiMiniArrowRight, HiMiniBookmarkSlash } from "react-icons/hi2";

import Link from "next/link";
import { ImageSizesType } from "../../../../utils/types";
import { getImageSizes } from "../../../../utils/functions";

type GameLibraryProps = {
  name: string;
  id: number;
  cover: string;
  action?: {
    handleClick: () => void;
    actionLabel: string;
    actionIcon: IconType;
  };
  imageSizes: ImageSizesType;
};

function GameLibraryItem({
  name,
  id,
  cover,
  imageSizes,
  action = {
    handleClick: () => {},
    actionLabel: "Remove game from Library",
    actionIcon: HiMiniBookmarkSlash,
  },
}: GameLibraryProps) {
  const sizes = getImageSizes(imageSizes);

  return (
    <div className={styles.container}>
      <Image src={cover || notFound} alt="" fill sizes={sizes} />
      <p className={styles.name}>{name || "Undefined Game"}</p>
      <div className={styles.btns}>
        <button
          onClick={action.handleClick}
          aria-label={action.actionLabel}
          className={`${styles.btn} ${styles.btn__action}`}
        >
          <action.actionIcon />
        </button>
        <Link
          href={`/games/${id}`}
          aria-label="Open Game Page"
          className={`${styles.btn} ${styles.btn__link}`}
        >
          <HiMiniArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default GameLibraryItem;
