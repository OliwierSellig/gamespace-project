import Button from "../../../global/Button";
import styles from "./emptyDataCol.module.scss";

type EmptyDataColProps = {
  listName: string;
};

function EmptyDataCol({ listName }: EmptyDataColProps) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        It seems that your {listName}, please add some games to fill the list.
      </p>
      <Button
        href={{ url: "/search" }}
        sizeX="md"
        borderRadius="md"
        sizeY="md"
        fontSize="sm"
      >
        Search Games
      </Button>
    </div>
  );
}

export default EmptyDataCol;
