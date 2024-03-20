import Link from "next/link";
import { useState } from "react";
import { BasicItemType } from "../../../utils/types/types";
import styles from "./collectionsBox.module.scss";
import CollectionsBoxInput from "./input/CollectionsBoxInput";
import CollectionsNameList from "./list/CollectionsNameList";

type CollectionsBoxProps = {
  game: BasicItemType;
};

function CollectionsBox({ game }: CollectionsBoxProps) {
  const [query, setQuery] = useState<string>("");

  return (
    <div className={styles.box}>
      <header className={styles.header}>Select Collections</header>
      <Link
        className={styles.create}
        href={`/games/${game.id}/create-collection`}
      >
        Start a new Collection
      </Link>
      <CollectionsBoxInput query={query} handleChange={setQuery} />
      <CollectionsNameList game={game} query={query} />
    </div>
  );
}

export default CollectionsBox;
