import styles from "./browseItem.module.scss";
import action from "../../../public/img/action.jpg";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi2";

function BrowseItem() {
  return (
    <li className={styles.container}>
      <Image src={action} alt="Game Cover" fill className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.name}>Action</h2>
        <Link className={styles.link} href="/">
          View Games
        </Link>

        <p className={styles.count}>
          <span className={styles.count__game}>Game Count:</span>
          <span className={styles.count__number}>25012</span>
        </p>
        <ul className={styles.list}>
          <li className={styles.popular}>
            <Link href="/" className={styles.popular__game}>
              Grand Theft Auto V
            </Link>
            <span className={styles.popular__visitors}>
              <span>5243</span>
              <HiOutlineUser />
            </span>
          </li>
          <li className={styles.popular}>
            <Link href="/" className={styles.popular__game}>
              Witcher 3 The Wild...
            </Link>
            <span className={styles.popular__visitors}>
              <span>4223</span>
              <HiOutlineUser />
            </span>
          </li>
          <li className={styles.popular}>
            <Link href="/" className={styles.popular__game}>
              Desitny 2
            </Link>
            <span className={styles.popular__visitors}>
              <span>3994</span>
              <HiOutlineUser />
            </span>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default BrowseItem;
