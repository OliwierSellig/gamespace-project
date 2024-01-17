import Link from "next/link";
import styles from "./gameCard.module.scss";
import Image from "next/image";
import { ChildrenProp } from "../../utils/types";
import { ReactNode } from "react";

type GameCardProps = {
  children?: ReactNode;
  href?: string;
  image: string;
  alt?: string;
  scales?: boolean;
};

function GameCard({
  children,
  href = "/",
  image,
  alt = "",
  scales = true,
}: GameCardProps) {
  return (
    <Link
      draggable={false}
      className={`${styles.container} ${scales ? styles.container__scale : ""}`}
      href={href}
    >
      <Image className={styles.background} src={image} alt={alt} fill />
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
