import { HiEllipsisHorizontal } from "react-icons/hi2";
import styles from "./recentGamesOptions.module.scss";
import { useEffect, useRef, useState } from "react";
import { useUser } from "../../../../contexts/UserContext";

type RecentGamesOptionsProps = {
  id: number;
};

function RecentGamesOptions({ id }: RecentGamesOptionsProps) {
  const { removeFromLibrary } = useUser();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(e.target as Node)
      )
        setIsOpen(false);
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
      {isOpen && (
        <div className={styles.list}>
          <button className={styles.option}>Write a review</button>
          <button className={styles.option}>Add to collection</button>
          <button
            onClick={() => removeFromLibrary(id)}
            className={styles.option}
          >
            Remove from library
          </button>
        </div>
      )}
    </div>
  );
}

export default RecentGamesOptions;
