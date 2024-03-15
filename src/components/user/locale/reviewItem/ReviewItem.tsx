"use client";

import Image from "next/image";
import styles from "./reviewItem.module.scss";
import Button from "../../../global/Button";
import { dateTransform } from "../../../../utils/functions";
import OpenDeleteReviewConfirmation from "../../../global/deleteReview/OpenDeleteReviewConfirmation";

type ReviewItemProps = {
  game: { name: string; cover: string; id: number };
  rating: number;
  review: string;
  author: string;
  date: Date;
};

function ReviewItem({ game, review, author, date, rating }: ReviewItemProps) {
  return (
    <li className={styles.container}>
      <Image
        src={game.cover}
        alt={`${game.name} cover`}
        sizes="(max-width: 1040px) 95vw, (max-width: 1600px) 50vw, 740px"
        fill
      />
      <div className={styles.content}>
        <header className={styles.header}>
          <span className={styles.name}>{game.name}</span>
          <div className={styles.rating}>{rating}/5</div>
        </header>
        <p className={styles.review}>{review}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.date}>{dateTransform(date)}</p>
      </div>
      <nav className={styles.row}>
        <Button
          href={{ url: `/games/${game.id}/review` }}
          style={{ name: "opacity", shade: "white" }}
          borderRadius="sm"
          sizeX="lg"
        >
          Edit Review
        </Button>
        <OpenDeleteReviewConfirmation id={game.id}>
          <Button
            style={{ name: "opacity", shade: "red" }}
            borderRadius="sm"
            sizeX="lg"
          >
            Delete Review
          </Button>
        </OpenDeleteReviewConfirmation>
      </nav>
    </li>
  );
}

export default ReviewItem;
