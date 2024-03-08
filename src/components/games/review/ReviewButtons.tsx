import { useRouter } from "next/navigation";
import { useUser } from "../../../contexts/UserContext";
import { SingleGameItem } from "../../../utils/types";
import Button from "../../global/Button";
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
  const { updateReviews, removeFromReviews } = useUser();
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
      <Button
        handleClick={() => {
          if (alreadyReviewed) {
            removeFromReviews(game.id);
          }
          router.push(`/games/${game.id}`);
        }}
        borderRadius="sm"
        style={{ name: "opacity", shade: "red" }}
        fontWeight={400}
        sizeX="xl"
        sizeY="lg"
      >
        {alreadyReviewed ? "Delete Review" : "Go Back"}
      </Button>
    </div>
  );
}

export default ReviewButtons;
