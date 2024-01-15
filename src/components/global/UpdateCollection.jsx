import { useEffect, useRef, useState } from "react";
import { useUser } from "../../contexts/UserContext";
import styles from "./updateCollection.module.scss";
import { useRouter } from "next/navigation";

const TITLE_LENGTH = 30;
const DESCRIPTION_LENGTH = 250;

function UpdateCollection({ game, collection }) {
  const { createCollection, updateCollectionInfo, deleteCollection } =
    useUser();
  const backgroundRef = useRef(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [savedChanges, setSavedChanges] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  // -------------------------------------------------------------
  // Checking Where you are Creating or Editing This Collection
  // -------------------------------------------------------------

  useEffect(() => {
    if (game?.id) return;
    setIsEditing(true);
    setName(collection.name);
    setDescription(collection.description);
  }, [game, collection]);

  // --------------------------------------
  // Saving Collection Changes
  // --------------------------------------

  function saveCollection() {
    if (!name) return;

    if (!isEditing) {
      createCollection(name, description, game);
    } else {
      updateCollectionInfo(name, description, collection);
    }

    setSavedChanges(true);
    setTimeout(() => {
      if (isEditing) {
        router.push(`/user/collections/${collection.id}`);
      } else {
        router.back();
      }
    }, 500);
  }

  // --------------------------------------
  // Deleting The Collection
  // --------------------------------------

  function onDeleteCollection() {
    setSavedChanges(true);
    setTimeout(() => {
      deleteCollection(collection.id);
      router.push(`/user/collections`);
    }, 300);
  }

  return (
    <div
      className={styles.background}
      ref={backgroundRef}
      onClick={(e) => {
        if (e.target === backgroundRef.current) router.back;
      }}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>
          {!isEditing ? "Start a new Collection" : "Edit your Collection"}
        </h2>
        <label className={styles.label} htmlFor="title">
          <h3 className={styles.label__title}>Title</h3>
          <span className={styles.label__count}>
            {TITLE_LENGTH - name.length}
          </span>
        </label>
        <input
          className={styles.input}
          type="text"
          id="title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Write a collection title"
          maxLength={TITLE_LENGTH}
        />
        <label className={styles.label} htmlFor="description">
          <h3 className={styles.label__title}>Description</h3>
          <span className={styles.label__count}>
            {DESCRIPTION_LENGTH - description.length}
          </span>
        </label>
        <textarea
          className={styles.textarea}
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a description"
          maxLength={DESCRIPTION_LENGTH}
        />
        <button
          className={`${styles.btn__submit} ${styles.btn}`}
          onClick={saveCollection}
        >
          Save changes
        </button>
        {isEditing && (
          <button
            className={`${styles.btn} ${styles.btn__delete}`}
            onClick={onDeleteCollection}
          >
            Delete Collection
          </button>
        )}
        <div
          className={`${styles.saved} ${
            savedChanges ? styles.saved__active : ""
          }`}
        >
          <p className={styles.saved__text}>
            Your collection has been properly updated
          </p>
          <img
            className={styles.saved__icon}
            src="/svg/check.svg"
            alt="Check icon"
          />
        </div>
      </div>
    </div>
  );
}

export default UpdateCollection;
