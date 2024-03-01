import Image from "next/image";
import styles from "./reviewItem.module.scss";
import Button from "../../../global/Button";

type ReviewItemProps = {
  game: { name: string; cover: string };
  review: string;
  author: string;
  date: string;
};

function ReviewItem({ game, review, author, date }: ReviewItemProps) {
  return (
    <li className={styles.container}>
      <Image
        src={game.cover}
        alt={`${game.name} cover`}
        sizes="(max-width: 1040px) 95vw, (max-width: 1600px) 50vw, 740px"
        fill
      />
      <div className={styles.content}>
        <p className={styles.name}>{game.name}</p>
        <p className={styles.review}>{review}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <nav className={styles.row}>
        <Button
          style={{ name: "opacity", shade: "white" }}
          borderRadius="sm"
          sizeX="lg"
        >
          Edit Review
        </Button>
        <Button
          style={{ name: "opacity", shade: "red" }}
          borderRadius="sm"
          sizeX="lg"
        >
          Delete Review
        </Button>
      </nav>
    </li>
  );
}

export default ReviewItem;