"use client";
import { SingleGameItem } from "../../utils/types";
import Modal from "../global/Modal";
import styles from "./readMore.module.scss";

type ReadMoreProps = {
  game: SingleGameItem;
};

function ReadMore({ game }: ReadMoreProps) {
  return (
    <Modal>
      <Modal.Open opens={`${game.name} description`}>
        <button className={styles.btn}>Read more</button>
      </Modal.Open>
      <Modal.Window name={`${game.name} description`}>
        <div className={styles.container}>{game.description}</div>
      </Modal.Window>
    </Modal>
  );
}

export default ReadMore;
