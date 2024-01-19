import Link from "next/link";
import styles from "./gameCard.module.scss";
import Image from "next/image";
import { ChildrenProp, ImageSizesType } from "../../utils/types";
import { ReactNode } from "react";

type GameCardProps = {
  children?: ReactNode;
  href?: string;
  image: string;
  alt?: string;
  scales?: boolean;
  imageSizes?: ImageSizesType;
};

function GameCard({
  children,
  href = "/",
  image,
  alt = "",
  scales = true,
  imageSizes,
}: GameCardProps) {
  const sizes =
    imageSizes?.sizes && imageSizes.sizes.length > 0
      ? imageSizes.sizes
          .map(
            (item) =>
              `(max-width: ${item.size.number}${item.size.unit} ${item.maxWidth})`
          )
          .join(", ")
          .concat(
            ", ",
            `${imageSizes.defalult.number}${imageSizes.defalult.unit}`
          )
      : `${imageSizes.defalult.number}${imageSizes.defalult.unit}`;

  return (
    <Link
      draggable={false}
      className={`${styles.container} ${scales ? styles.container__scale : ""}`}
      href={href}
    >
      <Image
        className={styles.background}
        sizes={sizes}
        src={image}
        alt={alt}
        fill
      />
      {Boolean(children) && <div className={styles.box}>{children}</div>}
    </Link>
  );
}

export default GameCard;

function GameCardTitle({ children }: ChildrenProp) {
  return <p className={styles.title}>{children}</p>;
}

function GameCardDetails({ children }: ChildrenProp) {
  return <p className={styles.details}>{children}</p>;
}

GameCard.Title = GameCardTitle;

GameCard.Details = GameCardDetails;
