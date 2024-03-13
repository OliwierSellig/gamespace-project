import CollectionDescription from "./description/CollectionDescription";
import CollectionHeader from "./header/CollectionHeader";
import CollectionNav from "./nav/CollectionNav";
import styles from "./collectionInfo.module.scss";
import CollectionReturnButton from "./returnButton/CollectionReturnButton";

function CollectionInfo() {
  return (
    <div className={styles.container}>
      <CollectionReturnButton />
      <div className={styles.row}>
        <CollectionHeader />
        <CollectionNav />
      </div>
      <CollectionDescription>
        Introducing the ultimate Assassin&apos;s Creed Gaming Collection, an
        immersive journey through history and intrigue. Step into the shoes of
        legendary assassins across various epochs, from ancient Egypt to
        Renaissance Italy, colonial America to Victorian London, and beyond.
        This definitive collection features meticulously crafted open-world
        environments, allowing players to explore richly detailed historical
        settings teeming with life and adventure. Engage in exhilarating parkour
        and combat as you navigate through iconic cities and landscapes.
      </CollectionDescription>
    </div>
  );
}

export default CollectionInfo;
