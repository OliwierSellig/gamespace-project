import Image from "next/image";
import styles from "./achievementsItem.module.scss";
import { AchievementResult } from "../../../../utils/types";
import notFound from "../../../../../public/img/not-found.png";

type AchievementItemProps = {
  achievement: AchievementResult;
};

function AchievementsItem({ achievement }: AchievementItemProps) {
  return (
    <li className={styles.item}>
      <div className={styles.cover}>
        <Image src={achievement.image || notFound} alt="" fill sizes="10rem" />
      </div>
      <div className={styles.content}>
        <p className={styles.percentage}>{`${achievement.percent}%`}</p>
        <p className={styles.title}>{achievement.name}</p>
        <p className={styles.description}>{achievement.description}</p>
      </div>
    </li>
  );
}

export default AchievementsItem;
