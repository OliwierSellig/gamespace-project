import Link from "next/link";
import styles from "./achievementsViewHeader.module.scss";
import { HiMiniArrowSmallLeft } from "react-icons/hi2";

type AchievementsViewHeaderProps = {
  id: string;
  name: string;
};

function AchievementsViewHeader({ id, name }: AchievementsViewHeaderProps) {
  return (
    <header className={styles.header}>
      <Link
        className={styles.back}
        href={`/games/${id}`}
        aria-label="Go back to main page"
      >
        <HiMiniArrowSmallLeft />
      </Link>
      <h1 className={styles.heading}>{`${
        name || "Undefined"
      } Achievements`}</h1>
    </header>
  );
}

export default AchievementsViewHeader;
