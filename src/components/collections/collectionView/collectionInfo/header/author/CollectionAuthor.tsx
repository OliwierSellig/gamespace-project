import { dateTransform } from "../../../../../../utils/functions";
import styles from "./collectionAuthor.module.scss";

type CollectionAuthorProps = {
  date: Date;
  name: string;
};

function CollectionAuthor({ date, name }: CollectionAuthorProps) {
  return (
    <p className={styles.author}>
      <span className={styles.author__grey}>Created </span>

      <span>{dateTransform(date)}</span>
      <span className={styles.author__grey}> by </span>
      <span>{name}</span>
    </p>
  );
}

export default CollectionAuthor;
