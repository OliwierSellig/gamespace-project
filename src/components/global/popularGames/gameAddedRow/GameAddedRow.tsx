import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi2";
import styles from "./gameAddedRow.module.scss";

type GameAddedRowProps = {
  id: number;
  name: string;
  count: number;
};

function GameAddedRow({ id, name, count }: GameAddedRowProps) {
  return (
    <li className={styles.container}>
      <Link href={`/games/${id}`} className={styles.game}>
        {name.length > 25 ? `${name.slice(0, 25)}...` : name}
      </Link>
      <span className={styles.visitors}>
        <span>{count}</span>
        <HiOutlineUser />
      </span>
    </li>
  );
}

export default GameAddedRow;
