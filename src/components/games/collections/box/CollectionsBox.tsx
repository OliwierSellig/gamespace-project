import Link from "next/link";
import styles from "./collectionsBox.module.scss";
import { useState } from "react";
import CollectionsNameList from "./list/CollectionsNameList";
import CollectionsBoxInput from "./input/CollectionsBoxInput";

const collectionList = [
  "My Gaming Collection",
  "Assasin's",
  "Batman x Superman",
  "No Idea Collection",
  "One More Thing",
  "Finito Collectionito",
];

function CollectionsBox() {
  const [query, setQuery] = useState<string>("");

  return (
    <div className={styles.box}>
      <header className={styles.header}>Select Collections</header>
      <Link className={styles.create} href="/collections/create">
        Start a new Collection
      </Link>
      <CollectionsBoxInput query={query} handleChange={setQuery} />
      <CollectionsNameList list={collectionList} query={query} />
    </div>
  );
}

export default CollectionsBox;
