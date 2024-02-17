import Link from "next/link";
import styles from "./gameActionButtons.module.scss";
import {
  HiOutlinePlusCircle,
  HiOutlineBookmark,
  HiOutlineFolderPlus,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import { ReactNode } from "react";

type GameActionButtonsProps = {
  children?: ReactNode;
};

function GameActionButtons({ children }: GameActionButtonsProps) {
  return (
    <>
      <div className={styles.actionBtns}>
        <button className={`${styles.btn__add} ${styles.btn}`}>
          <span>Add to My Games</span>
          <HiOutlinePlusCircle />
        </button>
        <button className={`${styles.btn__wishlist} ${styles.btn}`}>
          <span>Add to Wishlist</span>
          <HiOutlineBookmark />
        </button>
        <button className={`${styles.btn__collections} ${styles.btn}`}>
          Save to Collection
          <HiOutlineFolderPlus />
          {/* <CollectionsPopup
            openCollections={openCollections}
            setOpenCollections={setOpenCollections}
          /> */}
        </button>
      </div>
      {children}
      <Link className={`${styles.btn__review} ${styles.btn}`} href={`reviews`}>
        <span>Write a review</span>
        <HiOutlinePencilSquare />
      </Link>
    </>
  );
}

export default GameActionButtons;
