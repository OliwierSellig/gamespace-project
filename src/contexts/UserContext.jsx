"use client";

import { generateRandomID, getCurrentDate } from "@/utils/functions";
import { createContext, useContext, useEffect, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  gamesPlayed: JSON.parse(localStorage.getItem("gamesPlayed"))?.length
    ? JSON.parse(localStorage.getItem("gamesPlayed"))
    : [],
  wishlist: JSON.parse(localStorage.getItem("wishlist"))?.length
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
  reviews: JSON.parse(localStorage.getItem("reviews"))?.length
    ? JSON.parse(localStorage.getItem("reviews"))
    : [],

  collections: JSON.parse(localStorage.getItem("collections"))?.length
    ? JSON.parse(localStorage.getItem("collections"))
    : [],

  activities: {
    played: JSON.parse(localStorage.getItem("activitiesPlayed"))?.length
      ? JSON.parse(localStorage.getItem("activitiesPlayed"))
      : [],
    reviewed: JSON.parse(localStorage.getItem("activitiesReviewed"))?.length
      ? JSON.parse(localStorage.getItem("activitiesReviewed"))
      : [],
    collections: JSON.parse(localStorage.getItem("activitiesCollections"))
      ?.length
      ? JSON.parse(localStorage.getItem("activitiesCollections"))
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "addedAsPlayed":
      return {
        ...state,
        gamesPlayed: [...state.gamesPlayed, action.payload],
      };
    case "addedPlayedActivity":
      return {
        ...state,
        activities: {
          ...state.activities,
          played: [
            ...state.activities.played,
            {
              date: action.payload.date,
              act: action.payload.act,
              name: action.payload.name,
              id: action.payload.id,
            },
          ],
        },
      };
    case "addedReviewedActivity":
      return {
        ...state,
        activities: {
          ...state.activities,
          reviewed: [
            ...state.activities.reviewed,
            {
              date: action.payload.date,
              act: action.payload.act,
              name: action.payload.name,
              id: action.payload.id,
            },
          ],
        },
      };
    case "removedFromPlayed":
      return {
        ...state,
        gamesPlayed: state.gamesPlayed.filter(
          (game) => game.game.id !== action.payload.id
        ),
      };
    case "addedToWishlist":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "removedFromWishlist":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (game) => game.id !== action.payload.id
        ),
      };
    case "updatedReviews":
      return { ...state, reviews: action.payload };
    case "createdCollection":
      return {
        ...state,
        collections: [
          ...state.collections,
          {
            name: action.payload.name,
            slug: action.payload.slug,
            description: action.payload.description,
            createdAt: action.payload.date,
            id: action.payload.id,
            games: [action.payload.game],
          },
        ],
      };
    case "updatedCollections":
      return { ...state, collections: action.payload };
    case "addedCollectionsActivity":
      return {
        ...state,
        activities: {
          ...state.activities,
          collections: [
            ...state.activities.collections,
            {
              date: action.payload.date,
              act: action.payload.act,
              gameName: action.payload.gameName,
              gameID: action.payload.gameID,
              collectionName: action.payload.collectionName,
              collectionID: action.payload.collectionID,
            },
          ],
        },
      };
    case "setMostPlayedPlatforms":
      return { ...state, gamesPlayed: action.payload };
    default:
      throw new Error("Unknown Action");
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { gamesPlayed, wishlist, activities, reviews, collections } = state;

  // ---------------------------------------
  // Saving User Data to Local Storage
  // ---------------------------------------

  useEffect(() => {
    localStorage.setItem("gamesPlayed", JSON.stringify(gamesPlayed));
  }, [gamesPlayed]);

  useEffect(() => {
    localStorage.setItem("activitiesPlayed", JSON.stringify(activities.played));
  }, [activities.played]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem(
      "activitiesReviewed",
      JSON.stringify(activities.reviewed)
    );
  }, [activities.reviewed]);

  useEffect(() => {
    localStorage.setItem("collections", JSON.stringify(collections));
  }, [collections]);

  useEffect(() => {
    localStorage.setItem(
      "activitiesCollections",
      JSON.stringify(activities.collections)
    );
  }, [activities.collections]);

  function checkGamePlayed(id) {
    return gamesPlayed.find((game) => game.game.id === id);
  }

  function checkInWishlist(id) {
    return wishlist.find((game) => game.id === id);
  }

  function checkReviewed(id) {
    return reviews.find((r) => r.game.id === id);
  }

  // ---------------------------------------------------------
  // Getting Favourite Games Only
  // ---------------------------------------------------------

  function getFavourites() {
    return (
      gamesPlayed.filter((game) => game.isFavourite).map((game) => game.game) ||
      []
    );
  }

  // ---------------------------------------------------------
  // Games Logic
  // ---------------------------------------------------------

  function addToPlayed(game) {
    if (!game) return;
    dispatch({ type: "addedAsPlayed", payload: game });
    dispatch({
      type: "addedPlayedActivity",
      payload: {
        date: getCurrentDate(),
        act: "played",
        name: game.game.name,
        id: game.game.id,
      },
    });
  }

  function rankList(list, ascending = false) {
    const uniqueList = [...new Set(list)];
    const topList = uniqueList.map((item) => [
      item,
      list.filter((i) => i === item).length,
    ]);
    return topList.sort((a, b) =>
      ascending ? a.at(1) - b.at(1) : b.at(1) - a.at(1)
    );
  }

  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // Reviews Logic
  // ---------------------------------------------------------

  function updateReviews(review) {
    const filteredReviews = reviews.filter((r) => r.game.id !== review.game.id);
    dispatch({
      type: "addedReviewedActivity",
      payload: {
        date: getCurrentDate(),
        act: filteredReviews.length === reviews.length ? "reviewed" : "updated",
        name: review.game.name,
        id: review.game.id,
      },
    });
    dispatch({ type: "updatedReviews", payload: [...filteredReviews, review] });
  }

  function deleteReview(id) {
    const removedReview = checkReviewed(id);
    const filteredReviews = reviews.filter((r) => r.game.id !== id);
    if (!filteredReviews) return;
    dispatch({
      type: "addedReviewedActivity",
      payload: {
        date: getCurrentDate(),
        act: "unreviewed",
        name: removedReview.game.name,
        id: removedReview.game.id,
      },
    });
    dispatch({ type: "updatedReviews", payload: filteredReviews });
  }

  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // Collections Logic
  // ---------------------------------------------------------

  function createCollection(name, description, game) {
    const currentDate = getCurrentDate();
    const slug = name.toLowerCase().replaceAll(" ", "-");
    const id = generateRandomID();
    dispatch({
      type: "addedCollectionsActivity",
      payload: {
        date: currentDate,
        act: "created",
        gameName: "",
        gameID: "",
        collectionName: name,
        collectionID: id,
      },
    });
    dispatch({
      type: "addedCollectionsActivity",
      payload: {
        date: currentDate,
        act: "added to",
        gameName: game.name,
        gameID: game.id,
        collectionName: name,
        collectionID: id,
      },
    });
    dispatch({
      type: "createdCollection",
      payload: {
        name: name,
        slug: slug,
        description: description,
        date: currentDate,
        game: game,
        id: id,
      },
    });
  }

  function deleteCollection(id) {
    const selectedCollection = getCollectionByID(id);
    const filteredCollections = collections.filter((c) => c.id !== id);
    dispatch({
      type: "addedCollectionsActivity",
      payload: {
        date: getCurrentDate(),
        act: "deleted",
        gameName: "",
        gameID: "",
        collectionName: selectedCollection.name,
        collectionID: selectedCollection.id,
      },
    });
    dispatch({ type: "updatedCollections", payload: filteredCollections });
  }

  function updateCollectionInfo(newName, newDescription, collection) {
    const newSlug = newName.toLowerCase().replaceAll(" ", "-");

    const filteredCollections = collections.filter(
      (c) => c.id !== collection.id
    );

    const updateCollection = {
      ...collection,
      name: newName,
      slug: newSlug,
      description: newDescription,
    };

    const finalCollections = [...filteredCollections, updateCollection];
    dispatch({ type: "updatedCollections", payload: finalCollections });
  }

  function addToCollection(collection, game) {
    const filteredCollections = collections.filter(
      (c) => c.id !== collection.id
    );

    const updatedCollection = {
      ...collection,
      games: [...collection.games, game],
    };

    const finalCollections = [...filteredCollections, updatedCollection];

    dispatch({
      type: "addedCollectionsActivity",
      payload: {
        date: getCurrentDate(),
        act: "added to",
        gameName: game.name,
        gameID: game.id,
        collectionName: collection.name,
        collectionID: collection.id,
      },
    });

    dispatch({ type: "updatedCollections", payload: finalCollections });
  }

  function removeFromCollection(collection, gamesToRemove) {
    const filteredCollections = collections.filter(
      (c) => c.id !== collection.id
    );

    const filteredGames = collection.games.filter(
      (game) => !gamesToRemove.map((g) => g.id).includes(game.id)
    );

    const updatedCollection = {
      ...collection,
      games: filteredGames,
    };

    const finalCollections = [...filteredCollections, updatedCollection];

    gamesToRemove.forEach((g) =>
      dispatch({
        type: "addedCollectionsActivity",
        payload: {
          date: getCurrentDate(),
          act: "removed from",
          gameName: g.name,
          gameID: g.id,
          collectionName: collection.name,
          collectionID: collection.id,
        },
      })
    );

    dispatch({ type: "updatedCollections", payload: finalCollections });
  }

  function getCollectionByID(id) {
    const selectedCollection = collections.find(
      (collection) => collection.id === Number(id)
    );

    return selectedCollection;
  }

  // ---------------------------------------------------------

  return (
    <UserContext.Provider
      value={{
        ...state,
        dispatch,
        checkGamePlayed,
        checkInWishlist,
        getFavourites,
        addToPlayed,
        rankList,
        updateReviews,
        deleteReview,
        checkReviewed,
        createCollection,
        addToCollection,
        getCollectionByID,
        updateCollectionInfo,
        deleteCollection,
        removeFromCollection,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const value = useContext(UserContext);
  if (value === undefined)
    throw new Error("User Cotnext was used outside of a provider");

  return value;
}

export { UserProvider, useUser };
