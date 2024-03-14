import { HiEllipsisHorizontal } from "react-icons/hi2";
import styles from "./recentGamesOptions.module.scss";
import { useEffect, useRef, useState } from "react";
import { useUser } from "../../../../contexts/UserContext";
import Link from "next/link";
import CollectionsBox from "../../../global/addGameToCollectionBox/CollectionsBox";
import { BasicItemType } from "../../../../utils/types";

type RecentGamesOptionsProps = {
  game: BasicItemType;
};

function RecentGamesOptions({ game }: RecentGamesOptionsProps) {
  const { removeFromLibrary } = useUser();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openCollections, setOpenCollections] = useState<boolean>(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(e.target as Node)
      )
        setIsOpen(false);
      setOpenCollections(false);
    }

    addEventListener("scroll", () => setIsOpen(false));
    addEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
    return () => {
      removeEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
      removeEventListener("scroll", () => setIsOpen(false));
    };
  }, []);

  return (
    <div ref={selectorRef} className={styles.container}>
      <button
        onClick={() => setIsOpen(true)}
        className={styles.open}
        aria-label="Open Options"
      >
        <HiEllipsisHorizontal />
      </button>
      {isOpen && !openCollections && (
        <div className={styles.list}>
          <Link href={`/games/${game.id}/review`} className={styles.option}>
            Write a review
          </Link>
          <button
            onClick={() => setOpenCollections(true)}
            className={styles.option}
          >
            Add to collection
          </button>
          <button
            onClick={() => removeFromLibrary(game.id)}
            className={styles.option}
          >
            Remove from library
          </button>
        </div>
      )}
      {openCollections && <CollectionsBox game={game} />}
    </div>
  );
}

export default RecentGamesOptions;
