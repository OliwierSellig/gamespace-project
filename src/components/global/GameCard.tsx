import Link from "next/link";
import styles from "./gameCard.module.scss";
import Image from "next/image";
import { ChildrenProp, ImageSizesType } from "../../utils/types";
import { ReactNode } from "react";
import noImage from "../../../public/img/not-found.png";
import { getImageSizes } from "../../utils/functions";

type GameCardProps = {
  children?: ReactNode;
  href?: string;
  image: string;
  alt?: string;
  scales?: boolean;
  imageSizes: ImageSizesType;
};

function GameCard({
  children,
  href = "/",
  image,
  alt = "",
  scales = true,
  imageSizes,
}: GameCardProps) {
  const sizes = getImageSizes(imageSizes);

  return (
    <Link
      draggable={false}
      className={`${styles.container} ${scales ? styles.container__scale : ""}`}
      href={href}
    >
      <Image
        className={styles.background}
        sizes={sizes}
        src={image || noImage}
        alt={alt || ""}
        fill
        draggable={false}
      />
      {Boolean(children) && <div className={styles.box}>{children}</div>}
    </Link>
  );
}

export default GameCard;

function GameCardTitle({ children }: ChildrenProp) {
  return <p className={styles.title}>{children || ""}</p>;
}

function GameCardDetails({ children }: ChildrenProp) {
  return <p className={styles.details}>{children}</p>;
}

GameCard.Title = GameCardTitle;

GameCard.Details = GameCardDetails;
