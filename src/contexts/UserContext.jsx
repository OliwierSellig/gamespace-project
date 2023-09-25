import { createContext, useContext, useEffect, useReducer } from "react";
import { useUtility } from "./UtilityContext";

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

  activities: {
    played: JSON.parse(localStorage.getItem("activitiesPlayed"))?.length
      ? JSON.parse(localStorage.getItem("activitiesPlayed"))
      : [],
    reviewed: JSON.parse(localStorage.getItem("activitiesReviewed"))?.length
      ? JSON.parse(localStorage.getItem("activitiesReviewed"))
      : [],
    collections: [],
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
    case "setMostPlayedPlatforms":
      return { ...state, gamesPlayed: action.payload };
    default:
      throw new Error("Unknown Action");
  }
}

function UserProvider({ children }) {
  const { getCurrentDate } = useUtility();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { gamesPlayed, wishlist, activities, reviews } = state;

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

  function checkGamePlayed(id) {
    return gamesPlayed.find((game) => game.game.id === id);
  }

  function checkInWishlist(id) {
    return wishlist.find((game) => game.id === id);
  }

  function checkReviewed(id) {
    return reviews.find((r) => r.game.id === id);
  }

  function getFavourites() {
    return (
      gamesPlayed.filter((game) => game.isFavourite).map((game) => game.game) ||
      []
    );
  }

  function addToPlayed(game) {
    if (!game) return;
    const currentDate = getCurrentDate();
    dispatch({ type: "addedAsPlayed", payload: game });
    dispatch({
      type: "addedPlayedActivity",
      payload: {
        date: currentDate,
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

  function updateReviews(review) {
    const currentDate = getCurrentDate();
    const filteredReviews = reviews.filter((r) => r.game.id !== review.game.id);
    dispatch({
      type: "addedReviewedActivity",
      payload: {
        date: currentDate,
        act: filteredReviews.length === reviews.length ? "reviewed" : "updated",
        name: review.game.name,
        id: review.game.id,
      },
    });
    dispatch({ type: "updatedReviews", payload: [...filteredReviews, review] });
  }

  function deleteReview(id) {
    const currentDate = getCurrentDate();
    const removedReview = checkReviewed(id);
    const filteredReviews = reviews.filter((r) => r.game.id !== id);
    if (!filteredReviews) return;
    dispatch({
      type: "addedReviewedActivity",
      payload: {
        date: currentDate,
        act: "unreviewed",
        name: removedReview.game.name,
        id: removedReview.game.id,
      },
    });
    dispatch({ type: "updatedReviews", payload: filteredReviews });
  }

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
