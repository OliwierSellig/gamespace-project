"use client";

import CollectionNavButton from "./CollectionNavButtonLayout";
import styles from "./collectionNav.module.scss";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

function CollectionNav() {
  return (
    <nav className={styles.container}>
      <CollectionNavButton
        padding={{ top: 1.6, bottom: 1.6, left: 3.6, right: 3.6 }}
        handleClick={() => console.log("Adding Games")}
      >
        Add Gamees
      </CollectionNavButton>
      <CollectionNavButton
        padding={{ top: 1.6, bottom: 1.6, left: 3.6, right: 3.6 }}
        handleClick={() => console.log("Removing Collection")}
      >
        Delete Collection
      </CollectionNavButton>
      <CollectionNavButton
        handleClick={() => console.log("Sharing Colection")}
        padding={{ top: 1, left: 1, bottom: 1, right: 1 }}
      >
        <HiOutlineArrowTopRightOnSquare />
      </CollectionNavButton>
    </nav>
  );
}

export default CollectionNav;
