import { useRouter } from "next/navigation";
import { useUser } from "../../../../contexts/UserContext";
import { SingleGameItem } from "../../../../utils/types";
import Button from "../../../global/Button";
import styles from "./reviewButtons.module.scss";
import OpenDeleteReviewConfirmation from "../../../global/deleteReview/OpenDeleteReviewConfirmation";

type ReviewButtonsProps = {
  alreadyReviewed: boolean;
  game: SingleGameItem;
  reviewText: string;
  rating: number;
};

function ReviewButtons({
  alreadyReviewed,
  game,
  reviewText,
  rating,
}: ReviewButtonsProps) {
  const { updateReviews } = useUser();
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Button
        style={{ name: "opacity", shade: "white" }}
        fontWeight={400}
        sizeX="xl"
        sizeY="lg"
        disabled={!rating}
        borderRadius="sm"
        handleClick={() => {
          updateReviews({
            game: {
              name: game.name,
              id: game.id,
              cover: game.background_image,
            },
            author: "John Sanderson",
            editDate: new Date(),
            rating: rating,
            content: reviewText,
          });
          router.push(`/games/${game.id}`);
        }}
      >
        {alreadyReviewed ? "Update Review" : "Publish Review"}
      </Button>
      {alreadyReviewed && (
        <OpenDeleteReviewConfirmation id={game.id}>
          <Button
            borderRadius="sm"
            style={{ name: "opacity", shade: "red" }}
            fontWeight={400}
            sizeX="xl"
            sizeY="lg"
          >
            Delete Review
          </Button>
        </OpenDeleteReviewConfirmation>
      )}
      {!alreadyReviewed && (
        <Button
          href={{ url: `/games/${game.id}` }}
          borderRadius="sm"
          style={{ name: "opacity", shade: "red" }}
          fontWeight={400}
          sizeX="xl"
          sizeY="lg"
        >
          Go Back
        </Button>
      )}
    </div>
  );
}

export default ReviewButtons;
