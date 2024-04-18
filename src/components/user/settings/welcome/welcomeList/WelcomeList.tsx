import {
  HiOutlineBookmark,
  HiOutlineMagnifyingGlass,
  HiOutlinePencilSquare,
  HiOutlineSquaresPlus,
} from "react-icons/hi2";
import styles from "./welcomeList.module.scss";

const list = [
  { Icon: HiOutlineMagnifyingGlass, text: "Search for games" },
  { Icon: HiOutlineBookmark, text: "Add games to library" },
  { Icon: HiOutlinePencilSquare, text: "Review your games" },
  { Icon: HiOutlineSquaresPlus, text: "Create Collections" },
];

function WelcomeList() {
  return (
    <ul className={styles.list}>
      {list.map((item, i) => (
        <li key={i} className={styles.item}>
          <item.Icon />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default WelcomeList;
