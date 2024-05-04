"use client";

import { onAuthStateChanged } from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  ActivityItem,
  BasicItemType,
  ChildrenProp,
  CollectionItemType,
  LibraryItemType,
  ReviewType,
} from "../../utils/types/types";
import { auth } from "../../firebase/firebase";
import { getFullUserData } from "../../firebase/userData";

const UserContext = createContext<ContextType | undefined>(undefined);

// ---------- Setting Context Type ---------------------------

type ContextType = {
  state: stateProps;
  isLoggedIn: boolean;
  isLoading: boolean;
  currentAvatar: string;
  currentBackground: string;
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
  setCollection: (
    collection:
      | {
          type: "library";
          value: LibraryItemType[];
        }
      | {
          type: "wishlist";
          value: BasicItemType[];
        }
      | {
          type: "reviews";
          value: ReviewType[];
        }
      | {
          type: "collections";
          value: CollectionItemType[];
        }
      | {
          type: "activities";
          value: ActivityItem[];
        },
  ) => void;
};

// ----------------------------------------------------------------------------------

// ---------- Setting Types for Reducer && State ---------------------------

type stateProps = {
  profileSettings: {
    name: string;
    recentAvatars: string[];
    recentBackgrounds: string[];
    createdAt: string;
  };
  id: string;
  library: LibraryItemType[];
  wishlist: BasicItemType[];
  reviews: ReviewType[];
  collections: CollectionItemType[];
  activities: ActivityItem[];
};

const enum REDUCER_ACTION_TYPE {
  SET_USER_PROFILE,
  SET_ID,
  SET_LIBRARY,
  SET_WISHLIST,
  SET_REVIEWS,
  SET_COLLECTIONS,
  SET_ACTIVITIES,
  SET_INITIAL_RENDER,
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
  | {
      type: REDUCER_ACTION_TYPE.SET_LIBRARY;
      payload: LibraryItemType[];
    }
  | { type: REDUCER_ACTION_TYPE.SET_WISHLIST; payload: BasicItemType[] }
  | { type: REDUCER_ACTION_TYPE.SET_REVIEWS; payload: ReviewType[] }
  | { type: REDUCER_ACTION_TYPE.SET_COLLECTIONS; payload: CollectionItemType[] }
  | { type: REDUCER_ACTION_TYPE.SET_ACTIVITIES; payload: ActivityItem[] }
  | {
      type:
        | REDUCER_ACTION_TYPE.SET_INITIAL_RENDER
        | REDUCER_ACTION_TYPE.RESET_STATE;
    };

// ----------------------------------------------------------------------------------

// ---------- Setting Initial Values for Reducer && State ---------------------------

const initialState: stateProps = {
  profileSettings: {
    name: "",
    createdAt: "",
    recentAvatars: [],
    recentBackgrounds: [],
  },
  id: null,
  library: [],
  wishlist: [],
  reviews: [],
  collections: [],
  activities: [],
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
      return { ...state, library: action.payload };
    case REDUCER_ACTION_TYPE.SET_WISHLIST:
      return { ...state, wishlist: action.payload };
    case REDUCER_ACTION_TYPE.SET_REVIEWS:
      return { ...state, reviews: action.payload };
    case REDUCER_ACTION_TYPE.SET_COLLECTIONS:
      return { ...state, collections: action.payload };
    case REDUCER_ACTION_TYPE.SET_ACTIVITIES:
      return { ...state, activities: action.payload };
    case REDUCER_ACTION_TYPE.RESET_STATE:
      return { ...initialState };

    default:
      throw new Error("Undefined reducer action");
  }
}

// ----------------------------------------------------------------------------------

function UserProvider({ children }: ChildrenProp) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { profileSettings } = state;

  const currentAvatar = profileSettings.recentAvatars.at(0);
  const currentBackground = profileSettings.recentBackgrounds.at(0);

  // ------------------------------ Setup Functions -----------------------------------

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

  async function initialRender(user: { uid: string }) {
    if (user) {
      const userData = await getFullUserData(user.uid);
      if (userData) {
        dispatch({
          type: REDUCER_ACTION_TYPE.SET_USER_PROFILE,
          payload: {
            name: userData.profileSettings.gamespaceName,
            recentAvatars: userData.profileSettings.recentAvatars,
            recentBackgrounds: userData.profileSettings.recentBackgrounds,
            createdAt: userData.profileSettings.createdAt,
          },
        });
        dispatch({ type: REDUCER_ACTION_TYPE.SET_ID, payload: user.uid });
        dispatch({
          type: REDUCER_ACTION_TYPE.SET_LIBRARY,
          payload: userData.library,
        });
        dispatch({
          type: REDUCER_ACTION_TYPE.SET_WISHLIST,
          payload: userData.wishlist,
        });
        dispatch({
          type: REDUCER_ACTION_TYPE.SET_REVIEWS,
          payload: userData.reviews,
        });
        dispatch({
          type: REDUCER_ACTION_TYPE.SET_COLLECTIONS,
          payload: userData.collections,
        });
        dispatch({
          type: REDUCER_ACTION_TYPE.SET_ACTIVITIES,
          payload: userData.activities,
        });
        setIsLoggedIn(true);
      }
    } else {
      dispatch({ type: REDUCER_ACTION_TYPE.RESET_STATE });
      setIsLoggedIn(false);
    }
    setIsLoading(false);
  }

  function setRegisterUserData(props: {
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

  function setCollection(
    collection:
      | { type: "library"; value: LibraryItemType[] }
      | { type: "wishlist"; value: BasicItemType[] }
      | { type: "reviews"; value: ReviewType[] }
      | { type: "collections"; value: CollectionItemType[] }
      | { type: "activities"; value: ActivityItem[] },
  ) {
    function getReducerProps() {
      switch (collection.type) {
        case "library":
          return {
            type: REDUCER_ACTION_TYPE.SET_LIBRARY as REDUCER_ACTION_TYPE.SET_LIBRARY,
            payload: collection.value,
          };
        case "wishlist":
          return {
            type: REDUCER_ACTION_TYPE.SET_WISHLIST as REDUCER_ACTION_TYPE.SET_WISHLIST,
            payload: collection.value,
          };
        case "reviews":
          return {
            type: REDUCER_ACTION_TYPE.SET_REVIEWS as REDUCER_ACTION_TYPE.SET_REVIEWS,
            payload: collection.value,
          };
        case "collections":
          return {
            type: REDUCER_ACTION_TYPE.SET_COLLECTIONS as REDUCER_ACTION_TYPE.SET_COLLECTIONS,
            payload: collection.value,
          };
        case "activities":
          return {
            type: REDUCER_ACTION_TYPE.SET_ACTIVITIES as REDUCER_ACTION_TYPE.SET_ACTIVITIES,
            payload: collection.value,
          };
        default:
          return null;
      }
    }

    const dispatchObj = getReducerProps();

    if (dispatchObj) dispatch(dispatchObj);
  }

  // --------- Initialize User ----------------------

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initialRender);

    return unsubscribe;
  }, []);

  // ---------------------------------------------

  return (
    <UserContext.Provider
      value={{
        state,
        isLoading,
        isLoggedIn,
        currentAvatar,
        currentBackground,
        setRegisterUserData,
        setUserProfile,
        setCollection,
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
