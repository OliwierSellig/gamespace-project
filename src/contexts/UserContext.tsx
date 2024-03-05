"use client";

import { createContext, useContext, useReducer } from "react";
import { BasicItemType, ChildrenProp, LibraryItemType } from "../utils/types";
import toast from "react-hot-toast";
import { rankList } from "../utils/functions";

const UserContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  state: stateProps;
  genreList: { item: string; amount: number }[];
  devList: { item: string; amount: number }[];
  recentAddedGames: LibraryItemType[];
  favouritesList: LibraryItemType[];
  checkInLibrary: (id: number) => boolean;
  addToLibrary: (game: LibraryItemType) => void;
  removeFromLibrary: (id: number) => void;
  checkInWishlist: (id: number) => boolean;
  addToWishlist: (game: BasicItemType) => void;
  removeFromWishlist: (id: number) => void;
  getCommonYearList: () => {
    year: number;
    games: LibraryItemType[];
  }[];
  updateFavourite: (id: number, action: "add" | "remove") => void;
  checkIsFavourite: (id: number) => boolean;
};

type stateProps = {
  library: LibraryItemType[];
  wishlist: BasicItemType[];
};

const enum REDUCER_ACTION_TYPE {
  SET_LIBRARY,
  SET_WISHLIST,
}

type ReducerAction =
  | {
      type: REDUCER_ACTION_TYPE.SET_LIBRARY;
      payload: LibraryItemType[];
    }
  | { type: REDUCER_ACTION_TYPE.SET_WISHLIST; payload: BasicItemType[] };

const initialState: stateProps = {
  library: [],
  wishlist: [],
};

function reducer(state: stateProps, action: ReducerAction): stateProps {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_LIBRARY:
      return { ...state, library: action.payload };
    case REDUCER_ACTION_TYPE.SET_WISHLIST:
      return { ...state, wishlist: action.payload };
    default:
      throw new Error("Undefined reducer action");
  }
}

function UserProvider({ children }: ChildrenProp) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { library, wishlist } = state;

  const devList = rankList(
    library
      .filter((game) => game.developers.length)
      .map((game) => game.developers.at(0).name)
  );

  const genreList = rankList(
    library
      .filter((game) => game.genres.length)
      .map((game) => game.genres.at(0).name)
  );

  const recentAddedGames = [...library]
    .sort(
      (a, b) => b.addedToLibraryDate.getTime() - a.addedToLibraryDate.getTime()
    )
    .slice(0, 9);

  const favouritesList = library.filter((game) => game.isFavourite);

  function checkInLibrary(id: number) {
    return library.map((game) => game.id).includes(id);
  }

  function addToLibrary(game: LibraryItemType) {
    if (checkInLibrary(game.id)) {
      toast.error("You already have this game in library");
      return;
    }
    const newList = [...library, game];
    if (checkInWishlist(game.id)) removeFromWishlist(game.id);
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LIBRARY, payload: newList });
    toast.success("Successfully added to library");
  }

  function removeFromLibrary(id: number) {
    if (!checkInLibrary(id)) {
      toast.error("You don't have this game in your library");
      return;
    }
    const newList = library.filter((game) => game.id !== id);
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LIBRARY, payload: newList });
    toast.success("Successfully removed game from library");
  }

  function checkInWishlist(id: number) {
    return wishlist.map((game) => game.id).includes(id);
  }

  function addToWishlist(game: BasicItemType) {
    if (checkInWishlist(game.id)) {
      toast.error("You already have this game in wishlist");
      return;
    }
    const newList = [...wishlist, game];
    dispatch({ type: REDUCER_ACTION_TYPE.SET_WISHLIST, payload: newList });
    toast.success("Successfully added game to wishlist");
  }

  function removeFromWishlist(id: number) {
    if (!checkInWishlist(id)) {
      toast.error("You don't have this game in your wishlist");

      return;
    }
    const newList = wishlist.filter((game) => game.id !== id);
    dispatch({ type: REDUCER_ACTION_TYPE.SET_WISHLIST, payload: newList });
    toast.success("Successfully removed game from wishlist");
  }

  function getCommonYearList() {
    const uniqueList = [
      ...new Set(library.map((game) => new Date(game.released).getFullYear())),
    ];
    const topList = uniqueList.map((year) => {
      return {
        year,
        games: library.filter(
          (game) => new Date(game.released).getFullYear() === year
        ),
      };
    });
    return topList.sort((a, b) => b.year - a.year);
  }

  function updateFavourite(id: number, action: "add" | "remove") {
    const selectedGame = library.find((game) => game.id === id);
    if (!selectedGame) {
      toast.error("Couldn't add game to favourites");
      return;
    }
    const updatedGame = { ...selectedGame, isFavourite: action === "add" };
    const filteredList = library.filter((game) => game.id !== id);
    const newList = [...filteredList, updatedGame];
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LIBRARY, payload: newList });
    toast.success(
      `Successfully ${
        action === "add" ? "added game to " : "removed game from "
      } favourites`
    );
  }

  function checkIsFavourite(id: number) {
    const selectedGame = library.find((game) => game.id === id);

    if (!selectedGame) return false;

    return selectedGame ? selectedGame.isFavourite : false;
  }

  return (
    <UserContext.Provider
      value={{
        state,
        genreList,
        devList,
        recentAddedGames,
        favouritesList,
        checkInLibrary,
        addToLibrary,
        removeFromLibrary,
        checkInWishlist,
        addToWishlist,
        removeFromWishlist,
        getCommonYearList,
        updateFavourite,
        checkIsFavourite,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const value = useContext(UserContext);
  if (value === undefined)
    throw new Error("User context was used outside of a provider");
  return value;
}

export { useUser, UserProvider };
