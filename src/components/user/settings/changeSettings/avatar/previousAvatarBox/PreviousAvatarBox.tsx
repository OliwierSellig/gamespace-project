import Image from "next/image";
import { HiOutlineArrowUpCircle } from "react-icons/hi2";
import notFound from "../../../../../../../public/img/not-found.png";
import styles from "./previousAvatarBox.module.scss";

type PreviousAvatarBoxProps = {
  image: string;
};

function PreviousAvatarBox({ image }: PreviousAvatarBoxProps) {
  return (
    <button className={styles.btn} aria-label="Set previous avatar">
      <HiOutlineArrowUpCircle />
      <Image src={image || notFound} alt="Previous Avatar" fill />
    </button>
  );
}

export default PreviousAvatarBox;
