import baldurCover from "../../../../../public/img/review-baldur.jpg";
import tlouCover from "../../../../../public/img/review-tlou.webp";
import ReviewItem from "../../locale/ReviewItem";
import styles from "./reviewsRow.module.scss";

const reviews = [
  {
    game: { name: "Baldur's Gate", cover: baldurCover },
    review:
      "Baldur’s Gate is without a doubt the best game of 2023. Bringing back to life the old beloved series with addition of stunning graphics and designs as well as the good old adventure like realm. If you’re a D&D fan, you’ll for sure love this game!",
    author: "John Sanderson",
    date: "19.02.2024",
  },
  {
    game: { name: "The Last of Us Part 1", cover: tlouCover },
    review:
      "The Last of Us Part 1 is a masterpiece, blending intense action, emotional storytelling, and stunning visuals. Its post-apocalyptic world feels hauntingly real, with memorable characters and morally complex decisions. The gameplay is gripping, and the bond between protagonists Joel and Ellie is deeply moving. A must-play experience.",
    author: "John Sanderson",
    date: "17.02.2024",
  },
];

function ReviewsRow() {
  return (
    <ul className={styles.container}>
      {reviews.map((review) => (
        <ReviewItem
          key={review.game.name}
          game={{ name: review.game.name, cover: review.game.cover }}
          author={review.author}
          date={review.date}
          review={review.review}
        />
      ))}
    </ul>
  );
}

export default ReviewsRow;
