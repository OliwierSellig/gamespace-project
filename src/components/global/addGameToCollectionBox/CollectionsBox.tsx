import Link from "next/link";
import styles from "./collectionsBox.module.scss";
import { useState } from "react";
import CollectionsNameList from "./list/CollectionsNameList";
import CollectionsBoxInput from "./input/CollectionsBoxInput";
import { BasicItemType } from "../../../utils/types";

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
        href={`/collections/create?game=${game.id}`}
      >
        Start a new Collection
      </Link>
      <CollectionsBoxInput query={query} handleChange={setQuery} />
      <CollectionsNameList game={game} query={query} />
    </div>
  );
}

export default CollectionsBox;
