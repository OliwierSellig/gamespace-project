import Link from "next/link";
import styles from "./gameViewHeader.module.scss";
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { ReactNode } from "react";

type GameViewHeaderProps = {
  id: number;
  children: ReactNode;
};

function GameViewHeader({ id, children }: GameViewHeaderProps) {
  return (
    <header className={styles.header}>
      <Link
        className={styles.back}
        href={`/games/${id}`}
        aria-label="Go back to main page"
      >
        <HiMiniArrowSmallLeft />
      </Link>
      <h1 className={styles.heading}>{children}</h1>
    </header>
  );
}

export default GameViewHeader;
