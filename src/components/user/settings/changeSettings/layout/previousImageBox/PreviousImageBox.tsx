import Image from "next/image";
import { HiOutlineArrowUpCircle } from "react-icons/hi2";
import notFound from "../../../../../../../public/img/not-found.png";
import styles from "./previousImageBox.module.scss";

type PreviousImageBoxProps = {
  image: string;
  type?: "avatar" | "background";
  handleClick: (image: string) => void;
};

function PreviousImageBox({
  image,
  type = "avatar",
  handleClick,
}: PreviousImageBoxProps) {

  return (
    <button
      className={`${styles.btn} ${styles[`btn__${type}`]}`}
      aria-label={`Set previous ${type}`}
      onClick={() => handleClick(image)}
    >
      <HiOutlineArrowUpCircle />
      <Image src={image || notFound} alt={`Previous ${type}`} fill />
    </button>
  );
}

export default PreviousImageBox;
