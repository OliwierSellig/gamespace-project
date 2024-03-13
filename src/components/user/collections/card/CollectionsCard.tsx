import { BasicItemType } from "../../../../utils/types";
import CollectionCardGames from "./CollectionCardGames";
import styles from "./collectionsCard.module.scss";
import Image from "next/image";
import Button from "../../../global/Button";

type CollectionsCardProps = {
  title: string;
  author: string;
  id: number;
  games: BasicItemType[];
};

function CollectionsCard({ title, author, id, games }: CollectionsCardProps) {
  return (
    <li className={styles.container}>
      <Image
        src={games.at(0).cover}
        alt={`${title || "Undefined Collection"} cover`}
        fill
      />
      <h2 className={styles.title}>{title || "Undefied Collection"}</h2>
      <p className={styles.author}>
        <span className={styles.author__collection}>Collection </span>
        <span className={styles.author__by}>by: </span>
        <span className={styles.author__collection}>
          {author || "Undefined Author"}
        </span>
      </p>
      <Button
        href={{ url: `collections/${id}` }}
        style={{ name: "opacity", shade: "white" }}
        sizeY="sm"
        sizeX="md"
        borderRadius="sm"
        fontSize="sm"
        additionalStyle={{ letterSpacing: "0.4px", marginBottom: "2.4rem" }}
      >
        View Collection
      </Button>
      <CollectionCardGames games={games} />
    </li>
  );
}

export default CollectionsCard;