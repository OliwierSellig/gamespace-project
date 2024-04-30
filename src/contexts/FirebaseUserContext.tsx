"use client";

import { onAuthStateChanged } from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import toast from "react-hot-toast";
import {
  BasicItemType,
  ChildrenProp,
  LibraryItemType,
} from "../utils/types/types";
import { fetchGameByID } from "../lib/games";
import { auth } from "../firebase/firebase";
import {
  addGameToUserFirestore,
  removeGameFromUserFirestore,
  toggleFavouriteFirebase,
} from "../firebase/library";
import { getFullUserData } from "../firebase/userData";
import {
  addGameToUserFirestoreWishlist,
  removeGameFromUserFirestoreWishlist,
} from "../firebase/wishlist";

const FirebaseUserContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  state: stateProps;
  currentAvatar: string;
  currentBackground: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  setUserProfile: (profileData: {
    name?: string;
    recentAvatars?: string[];
    recentBackgrounds?: string[];
  }) => void;
  setRegisterUserData: (props: {
    name: string;
    recentBackgrounds: string[];
    recentAvatars: string[];
    createdAt: string;
    id: string;
  }) => void;
  checkInLibrary: (id: number) => LibraryItemType;
  addToLibrary: (game: LibraryItemType) => Promise<void>;
  addGameFromRanking: (id: number) => Promise<void>;
  removeFromLibrary: (id: number) => Promise<void>;
  updateFavourite: (id: number, action: "add" | "remove") => Promise<void>;
  checkIsFavourite: (id: number) => boolean;
  getFavouritesList: () => LibraryItemType[];
  addToWishlist: (game: BasicItemType) => Promise<void>;
  removeFromWishlist: (id: number) => Promise<void>;
};

type stateProps = {
  profileSettings: {
    name: string;
    recentAvatars: string[];
    recentBackgrounds: string[];
    createdAt: string;
  };
  library: LibraryItemType[];
  wishlist: BasicItemType[];
  reviews: string[];
  collections: string[];
  activities: string[];
  id: string;
};

const enum REDUCER_ACTION_TYPE {
  SET_USER_PROFILE,
  SET_ID,
  SET_LIBRARY,
  SET_WISHLIST,
  RESET_STATE,
}

type ReducerAction =
  | {
      type: REDUCER_ACTION_TYPE.SET_USER_PROFILE;
      payload: {
        name: string;
        recentAvatars: string[];
        recentBackgrounds: string[];
        createdAt: string;
      };
    }
  | { type: REDUCER_ACTION_TYPE.SET_ID; payload: string }
  | { type: REDUCER_ACTION_TYPE.RESET_STATE }
  | { type: REDUCER_ACTION_TYPE.SET_LIBRARY; payload: LibraryItemType[] }
  | { type: REDUCER_ACTION_TYPE.SET_WISHLIST; payload: BasicItemType[] };

const initialState: stateProps = {
  profileSettings: {
    name: "",
    createdAt: "",
    recentAvatars: [],
    recentBackgrounds: [],
  },
  library: [],
  wishlist: [],
  reviews: [],
  collections: [],
  activities: [],
  id: null,
};

function reducer(state: stateProps, action: ReducerAction): stateProps {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_USER_PROFILE:
      return {
        ...state,
        profileSettings: action.payload,
      };
    case REDUCER_ACTION_TYPE.SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    case REDUCER_ACTION_TYPE.SET_LIBRARY:
      return {
        ...state,
        library: action.payload,
      };
    case REDUCER_ACTION_TYPE.SET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    case REDUCER_ACTION_TYPE.RESET_STATE:
      return { ...initialState };

    default:
      throw new Error("Undefined reducer action");
  }
}

function FirebaseUserProvider({ children }: ChildrenProp) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { profileSettings, library, wishlist, id } = state;
  const currentAvatar = profileSettings.recentAvatars.at(0);
  const currentBackground = profileSettings.recentBackgrounds.at(0);

  function setUserProfile(profileData: {
    name?: string;
    recentAvatars?: string[];
    recentBackgrounds?: string[];
  }) {
    const name = profileData.name || state.profileSettings.name;
    const recentAvatars =
      profileData.recentAvatars || state.profileSettings.recentAvatars;
    const recentBackgrounds =
      profileData.recentBackgrounds || state.profileSettings.recentBackgrounds;

    const updatedUserProfile = {
      name,
      recentAvatars,
      recentBackgrounds,
      createdAt: state.profileSettings.createdAt,
    };

    dispatch({
      type: REDUCER_ACTION_TYPE.SET_USER_PROFILE,
      payload: updatedUserProfile,
    });
  }

  console.log(state);

  async function initialRender(user: { uid: string }) {
    if (user) {
      const userData = await getFullUserData(user.uid);
      if (userData) {
        dispatch({
          type: REDUCER_ACTION_TYPE.SET_USER_PROFILE,
          payload: {
            name: userData.gamespaceName,
            recentAvatars: userData.recentAvatars,
            recentBackgrounds: userData.recentBackgrounds,
            createdAt: userData.createdAt,
          },
        });
        dispatch({ type: REDUCER_ACTION_TYPE.SET_ID, payload: user.uid });
        setIsLoggedIn(true);
      }
    } else {
      dispatch({ type: REDUCER_ACTION_TYPE.RESET_STATE });
      setIsLoggedIn(false);
    }
    setIsLoading(false);
  }

  async function setRegisterUserData(props: {
    name: string;
    recentAvatars: string[];
    recentBackgrounds: string[];
    createdAt: string;
    id: string;
  }) {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_USER_PROFILE,
      payload: {
        name: props.name,
        recentAvatars: props.recentAvatars,
        recentBackgrounds: props.recentBackgrounds,
        createdAt: props.createdAt,
      },
    });
    dispatch({ type: REDUCER_ACTION_TYPE.SET_ID, payload: props.id });
    setIsLoggedIn(true);
  }

  // ------ Manipulating Library Data -----------

  function checkInLibrary(id: number) {
    return library.find((game) => game.id === id);
  }

  async function addToLibrary(game: LibraryItemType) {
    if (checkInLibrary(game.id)) {
      toast.error("You already have this game in library");
      return;
    }
    const newList = [...library, game];
    await addGameToUserFirestore({ id, game });
    // if (checkInWishlist(game.id)) removeFromWishlist(game.id);
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LIBRARY, payload: newList });
    toast.success("Successfully added to library");

    return;
  }

  async function addGameFromRanking(id: number) {
    const fetchedGame = await fetchGameByID(id);
    await addToLibrary({
      name: fetchedGame.name,
      cover: fetchedGame.background_image,
      slug: fetchedGame.slug,
      id: fetchedGame.id,
      addedToLibraryDate: new Date(),
      developers: fetchedGame.developers,
      genres: fetchedGame.genres,
      platforms: fetchedGame.platforms,
      released: fetchedGame.released,
      added: fetchedGame.added,
      rating: fetchedGame.rating,
      isFavourite: false,
    });

    return;
  }

  async function removeFromLibrary(id: number) {
    const targetGame = checkInLibrary(id);

    if (!targetGame) {
      toast.error("You don't have this game in your library");
      return;
    }
    const newList = library.filter((game) => game.id !== id);
    await removeGameFromUserFirestore({
      userID: state.id,
      gameID: id.toString(),
    });
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LIBRARY, payload: newList });
    toast.success("Successfully removed game from library");
  }

  // --------------------------------------------

  // ------- Manipulating Favourites -----------

  async function updateFavourite(id: number, action: "add" | "remove") {
    const targetGame = checkInLibrary(id);
    if (!targetGame) {
      toast.error("Couldn't add game to favourites");
      return;
    }
    const updatedGame = { ...targetGame, isFavourite: action === "add" };
    const filteredList = library.filter((game) => game.id !== id);
    const newList = [...filteredList, updatedGame];
    await toggleFavouriteFirebase({
      userID: state.id,
      gameID: id.toString(),
      isFavourite: action === "add",
    });
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LIBRARY, payload: newList });
    toast.success(
      `Successfully ${
        action === "add" ? "added game to " : "removed game from "
      } favourites`,
    );

    return;
  }

  function checkIsFavourite(id: number) {
    const targetGame = checkInLibrary(id);

    if (!targetGame) return false;

    return targetGame ? targetGame.isFavourite : false;
  }

  function getFavouritesList() {
    return library.filter((game) => game.isFavourite);
  }

  // ---------------------------------------------

  // ------- Manipulating Wishlist Data ---------

  function checkInWishlist(id: number) {
    return wishlist.find((game) => game.id === id);
  }

  async function addToWishlist(game: BasicItemType) {
    if (checkInWishlist(game.id)) {
      toast.error("You already have this game in wishlist");
      return;
    }
    const newList = [...wishlist, game];
    await addGameToUserFirestoreWishlist({ id, game });
    dispatch({ type: REDUCER_ACTION_TYPE.SET_WISHLIST, payload: newList });
    toast.success("Successfully added game to wishlist");
  }

  async function removeFromWishlist(id: number) {
    const targetGame = checkInWishlist(id);

    if (!targetGame) {
      toast.error("You don't have this game in your wishlist");

      return;
    }
    const newList = wishlist.filter((game) => game.id !== id);
    await removeGameFromUserFirestoreWishlist({
      gameID: id.toString(),
      userID: state.id,
    });
    dispatch({ type: REDUCER_ACTION_TYPE.SET_WISHLIST, payload: newList });
    toast.success("Successfully removed game from wishlist");
  }

  // --------------------------------------------

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initialRender);

    return unsubscribe;
  }, []);

  return (
    <FirebaseUserContext.Provider
      value={{
        state,
        currentAvatar,
        currentBackground,
        isLoggedIn,
        isLoading,
        setUserProfile,
        setRegisterUserData,
        checkInLibrary,
        addToLibrary,
        addGameFromRanking,
        removeFromLibrary,
        updateFavourite,
        checkIsFavourite,
        getFavouritesList,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </FirebaseUserContext.Provider>
  );
}

function useFirebaseUser() {
  const value = useContext(FirebaseUserContext);
  if (value === undefined)
    throw new Error("FirebaseUser context was used outside of a provider");
  return value;
}

export { useFirebaseUser, FirebaseUserProvider };
