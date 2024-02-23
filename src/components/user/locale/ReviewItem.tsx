import Image from "next/image";
import styles from "./reviewItem.module.scss";

type ReviewItemProps = {
  game: { name: string; cover: string };
  review: string;
  author: string;
  date: string;
};

function ReviewItem({ game, review, author, date }: ReviewItemProps) {
  return (
    <li className={styles.container}>
      <Image src={game.cover} alt={`${game.name} cover`} fill />
      <div className={styles.content}>
        <p className={styles.name}>{game.name}</p>
        <p className={styles.review}>{review}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <nav className={styles.row}>
        <button className={`${styles.btn} ${styles.btn__white}`}>
          Edit Review
        </button>
        <button className={`${styles.btn} ${styles.btn__red}`}>
          Delete Review
        </button>
      </nav>
    </li>
  );
}

export default ReviewItem;
