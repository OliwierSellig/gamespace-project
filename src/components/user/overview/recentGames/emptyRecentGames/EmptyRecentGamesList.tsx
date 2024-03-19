import Button from "../../../../global/button/Button";
import styles from "./emptyRecentGamesList.module.scss";

function EmptyRecentGamesList() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        It seems you have&apos;t added any games recently, please add some games
        you may like!
      </p>
      <Button
        style={{ name: "opacity", shade: "white" }}
        borderRadius="md"
        fontWeight={400}
        href={{ url: "/search" }}
      >
        Search Games
      </Button>
    </div>
  );
}

export default EmptyRecentGamesList;
