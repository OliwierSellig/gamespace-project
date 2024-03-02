"use client";

import { createContext, useContext, useReducer } from "react";
import {
  ChildrenProp,
  GameDeveloperType,
  GameGenreItem,
  PlatformType,
} from "../utils/types";
import toast from "react-hot-toast";

const UserContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  state: stateProps;
  checkInLibrary: (id: number) => boolean;
  addToLibrary: (game: LibraryItemType) => void;
  removeFromLibrary: (id: number) => void;
  checkInWishlist: (id: number) => boolean;
  addToWishlist: (game: BasicItemType) => void;
  removeFromWishlist: (id: number) => void;
};

type BasicItemType = { name: string; slug: string; id: number; cover: string };

type LibraryItemType = BasicItemType & {
  genres: GameGenreItem[];
  platforms: PlatformType[];
  developers: GameDeveloperType[];
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

  console.log(state);

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

  return (
    <UserContext.Provider
      value={{
        state,
        checkInLibrary,
        addToLibrary,
        removeFromLibrary,
        checkInWishlist,
        addToWishlist,
        removeFromWishlist,
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
