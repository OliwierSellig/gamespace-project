"use client";

import { CollectionItemType } from "../../../../../utils/types";
import CollectionNavButton from "./CollectionNavButtonLayout";
import RemoveCollectionButton from "./RemoveCollectionButton";
import styles from "./collectionNav.module.scss";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

type CollectionNavProps = {
  collection: CollectionItemType;
};

function CollectionNav({ collection }: CollectionNavProps) {
  return (
    <nav className={styles.container}>
      <CollectionNavButton
        padding={{ top: 1.6, bottom: 1.6, left: 3.6, right: 3.6 }}
        href="/search"
      >
        Add Gamees
      </CollectionNavButton>
      <RemoveCollectionButton id={collection.id} />
      <CollectionNavButton
        href="https://oliwiersellig.dev/"
        padding={{ top: 1, left: 1, bottom: 1, right: 1 }}
      >
        <HiOutlineArrowTopRightOnSquare />
      </CollectionNavButton>
    </nav>
  );
}

export default CollectionNav;
