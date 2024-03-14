import Link from "next/link";
import styles from "./collectionsBox.module.scss";
import { useState } from "react";
import CollectionsNameList from "./list/CollectionsNameList";
import CollectionsBoxInput from "./input/CollectionsBoxInput";
import { BasicItemType, SingleGameItem } from "../../../../utils/types";

type CollectionsBoxProps = {
  game: SingleGameItem;
};

function CollectionsBox({ game }: CollectionsBoxProps) {
  const [query, setQuery] = useState<string>("");
  const gameProp: BasicItemType = {
    name: game.name,
    id: game.id,
    cover: game.background_image,
    slug: game.slug,
    added: game.added,
    rating: game.rating,
    released: game.released,
  };

  return (
    <div className={styles.box}>
      <header className={styles.header}>Select Collections</header>
      <Link
        className={styles.create}
        href={`/collections/create?game=${game.id}`}
      >
        Start a new Collection
      </Link>
      <CollectionsBoxInput query={query} handleChange={setQuery} />
      <CollectionsNameList game={gameProp} query={query} />
    </div>
  );
}

export default CollectionsBox;
