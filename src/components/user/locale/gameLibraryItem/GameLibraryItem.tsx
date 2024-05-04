"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";
import { HiMiniArrowRight, HiMiniBookmarkSlash } from "react-icons/hi2";
import { getImageSizes } from "../../../../utils/functions/functions";
import { ImageSizesType } from "../../../../utils/types/types";
import notFound from "../../../../../public/img/not-found.png";
import styles from "./gameLibraryItem.module.scss";

type GameLibraryProps = {
  name: string;
  id: number;
  cover: string;
  action?: {
    handleClick: () => Promise<void>;
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
    handleClick: async () => {},
    actionLabel: "Remove game from Library",
    actionIcon: HiMiniBookmarkSlash,
  },
}: GameLibraryProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sizes = getImageSizes(imageSizes);

  async function handleClick() {
    setIsLoading(true);
    try {
      await action.handleClick();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      className={`${styles.container} ${styles[`container__${isLoading ? "loading" : "active"}`]}`}
    >
      <Image src={cover || notFound} alt="" fill sizes={sizes} />
      <p className={styles.name}>{name || "Undefined Game"}</p>
      <div className={styles.btns}>
        <button
          onClick={handleClick}
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
      {isLoading && (
        <div className="loadingSpinner loadingSpinner__card loadingSpinner__thickLg" />
      )}
    </div>
  );
}

export default GameLibraryItem;
