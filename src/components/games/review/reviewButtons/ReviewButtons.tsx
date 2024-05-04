import { useRouter } from "next/navigation";
import { useState } from "react";
import { SingleGameItem } from "../../../../utils/types/types";
import { useUser } from "../../../../contexts/UserContext";
import { useReviews } from "../../../../contexts/reviewsContext/ReviewsContext";
import Button from "../../../global/button/Button";
import OpenDeleteReviewConfirmation from "../../../global/deleteReview/OpenDeleteReviewConfirmation";
import styles from "./reviewButtons.module.scss";

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
  const { state } = useUser();
  const { updateReviews } = useReviews();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const username = state.profileSettings.name;
  return (
    <div className={styles.container}>
      <Button
        style={{ name: "opacity", shade: "white" }}
        fontWeight={400}
        sizeX="xl"
        sizeY="lg"
        disabled={!rating}
        isLoading={isLoading}
        borderRadius="sm"
        handleClick={async () => {
          setIsLoading(true);
          try {
            await updateReviews({
              game: {
                name: game.name,
                id: game.id,
                cover: game.background_image,
              },
              author: username,
              editDate: new Date(),
              rating: rating,
              content: reviewText,
            });
          } finally {
            setIsLoading(false);
            router.push(`/games/${game.id}`);
          }
        }}
      >
        {alreadyReviewed ? "Update Review" : "Publish Review"}
      </Button>
      {alreadyReviewed && (
        <OpenDeleteReviewConfirmation
          handleClick={() => router.push(`/games/${game.id}`)}
          id={game.id}
        >
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
