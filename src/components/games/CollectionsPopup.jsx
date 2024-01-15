import styles from "./collectionsPopup.module.scss";
import { useEffect } from "react";
import { useUser } from "../../contexts/UserContext";
import { useGame } from "../../contexts/GameContext";
import Link from "next/link";

function CollectionsPopup({ setOpenCollections, openCollections }) {
  const { game } = useGame();
  const { collections, addToCollection } = useUser();
  const filteredCollections = collections.filter(
    (collection) => !collection.games.find((g) => g.id === game.id)
  );

  useEffect(() => {
    function closeCollections() {
      setOpenCollections(false);
    }

    window.addEventListener("click", closeCollections, {
      capture: true,
    });

    function dispatch() {
      window.removeEventListener("click", closeCollections);
    }

    return dispatch;
  }, [setOpenCollections]);

  return (
    <div
      className={`${styles.container} ${!openCollections ? styles.hidden : ""}`}
    >
      {!filteredCollections.length && (
        <p className={styles.empty}>
          No collection yet, please create a one below.
        </p>
      )}
      {filteredCollections.length > 0 && (
        <ul className={styles.list}>
          {filteredCollections.map((collection) => (
            <li
              className={styles.item}
              key={collection.slug}
              tabIndex={0}
              role="button"
              onClick={() => addToCollection(collection, game)}
            >
              {collection.name}
            </li>
          ))}
        </ul>
      )}
      <Link href="create-collection" className={styles.btnCreate}>
        Create new Collection
      </Link>
    </div>
  );
}

export default CollectionsPopup;
