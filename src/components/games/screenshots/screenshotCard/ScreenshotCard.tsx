"use client";

import Image from "next/image";
import { SingleScreenshotItem } from "../../../../utils/types";
import Modal from "../../../global/modal/Modal";
import ScreenshotView from "../screenshotView/ScreenshotView";
import styles from "./screenshotCard.module.scss";
import notFound from "../../../../../public/img/not-found.png";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

type ScreenshotCardProps = { index: number; list: SingleScreenshotItem[] };

function ScreenshotCard({ index, list }: ScreenshotCardProps) {
  const screenshot = list?.at(index);

  return (
    <Modal>
      <Modal.Open opens={`Screenshot ${screenshot.id}`}>
        <button className={styles.box} draggable={false}>
          <Image
            draggable={false}
            src={screenshot.image || notFound}
            alt={`Screenshot ${screenshot.id}`}
            sizes="(max-width: 1480px) 56rem, 40vw"
            fill
          />
          <div className={styles.box__open}>
            <HiMiniMagnifyingGlass />
          </div>
        </button>
      </Modal.Open>
      <Modal.Window name={`Screenshot ${screenshot.id}`}>
        <ScreenshotView list={list} currentScreenshot={index} />
      </Modal.Window>
    </Modal>
  );
}

export default ScreenshotCard;
