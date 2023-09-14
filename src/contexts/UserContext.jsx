import { createContext, useContext, useEffect, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  gamesPlayed: JSON.parse(localStorage.getItem("gamesPlayed"))?.length
    ? JSON.parse(localStorage.getItem("gamesPlayed"))
    : [],
  wishlist: JSON.parse(localStorage.getItem("wishlist"))?.length
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
  activities: {
    played: JSON.parse(localStorage.getItem("activitiesPlayed"))?.length
      ? JSON.parse(localStorage.getItem("activitiesPlayed"))
      : [],
    reviewed: [],
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
    case "setMostPlayedPlatforms":
      return { ...state, gamesPlayed: action.payload };
    default:
      throw new Error("Unknown Action");
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { gamesPlayed, wishlist, activities } = state;

  useEffect(() => {
    localStorage.setItem("gamesPlayed", JSON.stringify(gamesPlayed));
  }, [gamesPlayed]);

  useEffect(() => {
    localStorage.setItem("activitiesPlayed", JSON.stringify(activities.played));
  }, [activities.played]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function checkGamePlayed(id) {
    return gamesPlayed.find((game) => game.game.id === id);
  }

  function checkInWishlist(id) {
    return wishlist.find((game) => game.id === id);
  }

  function getFavourites() {
    return (
      gamesPlayed.filter((game) => game.isFavourite).map((game) => game.game) ||
      []
    );
  }

  function addToPlayed(game, date) {
    if (!game || !date) return;
    dispatch({ type: "addedAsPlayed", payload: game });
    dispatch({
      type: "addedPlayedActivity",
      payload: { date: date, name: game.game.name, id: game.game.id },
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
