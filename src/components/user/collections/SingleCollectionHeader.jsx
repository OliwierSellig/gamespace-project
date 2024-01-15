import { useNavigate } from "react-router-dom";
import SearchInput from "../../global/SearchInput";
import styles from "./singleCollectionHeader.module.scss";

function SingleCollectionHeader({ collection, query, setQuery }) {
  const navigate = useNavigate();

  return (
    <header>
      <div className={styles.headingNav}>
        <h2 className={styles.name}>{collection.name}</h2>
        <nav className={styles.btnNav}>
          <button className={styles.btn} onClick={() => navigate(`/search`)}>
            Add Games
          </button>
          <button className={styles.btn} onClick={() => navigate(`remove`)}>
            Remove Games
          </button>
          <button className={styles.btn} onClick={() => navigate(`update`)}>
            Edit
          </button>
        </nav>
      </div>
      <p className={styles.created}>
        <span>Created on </span>
        <span className={styles.date}>{collection.createdAt}</span>
        <span>by</span>
        <span className={styles.author}>John Sanderson</span>
        <img
          className={styles.author__img}
          src="/img/user.webp"
          alt="Author Photo"
        />
      </p>
      <p className={styles.description}>{collection.description}</p>
      <SearchInput
        inputValue={query}
        handleChange={setQuery}
        inputStyle="search__collection"
      />
    </header>
  );
}

export default SingleCollectionHeader;
