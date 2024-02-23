"use client";

import { useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useUser } from "../../../../contexts/UserContext";
import RemoveGameItem from "./RemoveGameItem";
import styles from "./removeGames.module.scss";

function RemoveGames() {
  const { removeFromCollection, deleteCollection } = useUser();
  const selectedCollection = useOutletContext();
  const backgroundRef = useRef();
  const navigate = useNavigate();
  const [gamesToDelete, setGamesToDelete] = useState([]);

  const deletingAll = selectedCollection.games.length === gamesToDelete.length;

  // ----------------------------------------------
  // Checking Whether The Game is to be Deleted
  // ----------------------------------------------

  function checkInGamesToDelete(id) {
    return gamesToDelete.map((g) => g.id).includes(id);
  }

  // --------------------------------
  // Adding Game to Deletion List
  // --------------------------------

  function toggleGameDeletion(game) {
    if (!checkInGamesToDelete(game.id))
      setGamesToDelete((games) => [...games, game]);
    else {
      const filteredGames = gamesToDelete.filter((g) => g.id !== game.id);
      setGamesToDelete(filteredGames);
    }
  }

  // -------------------------------------------------------------------------------
  // Function That Either Call for Deletion of Certain Games or Whole Collection
  // -------------------------------------------------------------------------------

  function saveCollectionChanges() {
    if (deletingAll) {
      deleteCollection(selectedCollection.id);
      navigate(`/user/collections`);
    } else {
      removeFromCollection(selectedCollection, gamesToDelete);
      navigate(-1);
    }
  }

  return (
    <div
      className={styles.background}
      ref={backgroundRef}
      onClick={(e) => {
        if (e.target === backgroundRef.current) navigate(-1);
      }}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>
          {`Remove games from ${selectedCollection.name}`}
        </h2>
        <ul className={styles.list}>
          {selectedCollection.games.map((game) => (
            <RemoveGameItem
              key={game.id}
              game={game}
              gamesToDelete={gamesToDelete}
              toggleGameDeletion={toggleGameDeletion}
              checkInGamesToDelete={checkInGamesToDelete}
            />
          ))}
        </ul>
        <button className={styles.btn} onClick={saveCollectionChanges}>
          Remove games
        </button>
        {deletingAll && (
          <p className={styles.alert}>
            <span className={styles.alert__text}>
              Hold on! Keep in mind that removing all games from the collection
              will cause it&apos;s deletion.
            </span>
            <img
              className={styles.alert__icon}
              src="/svg/danger-triangle.svg"
              alt="Danger Triangle Icon"
            />
          </p>
        )}
      </div>
    </div>
  );
}

export default RemoveGames;
