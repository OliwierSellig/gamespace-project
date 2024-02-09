"use client";
import Image from "next/image";
import { SingleGameItem } from "../../utils/types";
import Modal from "../global/Modal";
import styles from "./readMore.module.scss";
import notFound from "./../../../public/img/not-found.png";
import { HiOutlineBookmark, HiOutlinePlusCircle } from "react-icons/hi2";

type ReadMoreProps = {
  game: SingleGameItem;
};

function ReadMore({ game }: ReadMoreProps) {
  return (
    <Modal>
      <Modal.Open opens={`${game.name} description`}>
        <button className={styles.open}>Read more</button>
      </Modal.Open>
      <Modal.Window name={`${game.name} description`}>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src={game.background_image || notFound}
              alt={game.name ? `${game.name} Cover` : "Undefined Game Cover"}
              fill
              sizes="40vw"
            />
          </div>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2 className={styles.heading}>
                {game.name || "Undefined Game"}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: game.description }}
                className={styles.description}
              />
              <nav className={styles.btns}>
                <button className={`${styles.btn__add} ${styles.btn}`}>
                  <span>Add to My Games</span>
                  <HiOutlinePlusCircle />
                </button>
                <button className={`${styles.btn__wishlist} ${styles.btn}`}>
                  <span>Add to Wishlist</span>
                  <HiOutlineBookmark />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </Modal.Window>
    </Modal>
  );
}

export default ReadMore;
