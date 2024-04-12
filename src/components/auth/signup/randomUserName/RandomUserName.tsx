import { useRef } from "react";
import { IoMdRefresh } from "react-icons/io";
import styles from "./randomUserName.module.scss";

const usernames = ["AuthorityUnreeve31", "SpiritedWorst10"];

type RandomUserNameProps = {
  setName: (name: string) => void;
};

function RandomUserName({ setName }: RandomUserNameProps) {
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <div className={styles.container}>
      <p className={styles.text}>Or, choose one from below:</p>
      <div className={styles.row}>
        <ul className={styles.list} ref={listRef}>
          {usernames.map((name, i) => (
            <li key={i}>
              <button
                onClick={() => setName(name)}
                type="button"
                className={styles.btn}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
        <button type="button" className={styles.refresh}>
          <IoMdRefresh />
        </button>
      </div>
    </div>
  );
}

export default RandomUserName;
