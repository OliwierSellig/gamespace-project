import Image from "next/image";
import { HiOutlineArrowUpCircle } from "react-icons/hi2";
import { urlToFile } from "../../../../../../utils/functions/functions";
import notFound from "../../../../../../../public/img/not-found.png";
import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import styles from "./previousImageBox.module.scss";

type PreviousImageBoxProps = {
  image: string;
  type?: "avatar" | "background";
};

function PreviousImageBox({ image, type = "avatar" }: PreviousImageBoxProps) {
  const { setNewAvatar } = useUserSettings();

  async function setNewValue() {
    const file = await urlToFile(image || notFound.src);
    setNewAvatar(file);
  }

  return (
    <button
      className={`${styles.btn} ${styles[`btn__${type}`]}`}
      aria-label={`Set previous ${type}`}
      onClick={() => {
        setNewValue();
      }}
    >
      <HiOutlineArrowUpCircle />
      <Image src={image || notFound} alt={`Previous ${type}`} fill />
    </button>
  );
}

export default PreviousImageBox;
