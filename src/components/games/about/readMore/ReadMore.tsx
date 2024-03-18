"use client";

import { SingleGameItem } from "../../../../utils/types";
import Modal from "../../../global/Modal";
import FullDescription from "../fullDescription/FullDescription";
import styles from "./readMore.module.scss";

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
        <FullDescription game={game} />
      </Modal.Window>
    </Modal>
  );
}

export default ReadMore;
