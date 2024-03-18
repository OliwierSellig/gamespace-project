import Link from "next/link";
import styles from "./openAchievementsView.module.scss";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";

type OpenAchievementsViewProps = {
  id: string;
  count: number;
};

function OpenAchievementsView({ id, count }: OpenAchievementsViewProps) {
  return (
    <li>
      <Link href={`/games/${id}/achievements`} className={styles.more}>
        <div className={styles.more__icon}>
          <HiMiniEllipsisHorizontal />
        </div>
        <div>
          <p className={styles.more__main}>View all achievements</p>
          <p className={styles.more__sub}>{`${count || "Undefined"} items`}</p>
        </div>
      </Link>
    </li>
  );
}

export default OpenAchievementsView;
