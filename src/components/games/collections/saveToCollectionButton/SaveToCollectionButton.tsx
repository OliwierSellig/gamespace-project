"use client";

import { HiOutlineFolderPlus } from "react-icons/hi2";
import styles from "./saveToCollectionButton.module.scss";
import { useEffect, useRef, useState } from "react";
import { SingleGameItem } from "../../../../utils/types";
import CollectionsBox from "../../../global/addGameToCollectionBox/CollectionsBox";
import { SingleGameItemToBasicItemType } from "../../../../utils/functions";

type SaveToCollectionButtonProps = { game: SingleGameItem };

function SaveToCollectionButton({ game }: SaveToCollectionButtonProps) {
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

    addEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
    return () =>
      removeEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
  }, []);

  return (
    <div className={styles.container} ref={selectorRef}>
      <button onClick={() => setIsOpen(true)} className={styles.open}>
        <span>Save to Collection</span>
        <HiOutlineFolderPlus />
      </button>
      {isOpen && <CollectionsBox game={SingleGameItemToBasicItemType(game)} />}
    </div>
  );
}

export default SaveToCollectionButton;
