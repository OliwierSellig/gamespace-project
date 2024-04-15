import { useFormikContext } from "formik";
import { IoMdRefresh } from "react-icons/io";
import styles from "./randomUserName.module.scss";

const usernames = ["AuthorityUnreeve31", "SpiritedWorst10"];

function RandomUserName() {
  const formik = useFormikContext();

  return (
    <div className={styles.container}>
      <p className={styles.text}>Or, choose one from below:</p>
      <div className={styles.row}>
        <ul className={styles.list}>
          {usernames.map((name, i) => (
            <li key={i}>
              <button
                onClick={() => formik.setFieldValue("gamespaceName", name)}
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
