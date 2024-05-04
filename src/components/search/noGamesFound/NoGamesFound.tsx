import { useRouter } from "next/navigation";
import { useSearch } from "../../../contexts/searchContext/SearchContex";
import styles from "./noGamesFound.module.scss";

function NoGamesFound() {
  const { setQuery } = useSearch();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        No games matching your search terms has been found.
      </p>
      <button
        onClick={() => {
          router.push("/search");
          setQuery("");
        }}
        className={styles.btn}
      >
        Search All
      </button>
    </div>
  );
}

export default NoGamesFound;
