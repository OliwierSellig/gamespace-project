import Button from "../../global/Button";
import styles from "./reviewButtons.module.scss";

function ReviewButtons() {
  return (
    <div className={styles.container}>
      <Button
        style={{ name: "opacity", shade: "white" }}
        fontWeight={400}
        sizeX="xl"
        sizeY="lg"
        borderRadius="sm"
      >
        Publish Review
      </Button>
      <Button
        borderRadius="sm"
        style={{ name: "opacity", shade: "red" }}
        fontWeight={400}
        sizeX="xl"
        sizeY="lg"
      >
        Delete Review
      </Button>
    </div>
  );
}

export default ReviewButtons;
