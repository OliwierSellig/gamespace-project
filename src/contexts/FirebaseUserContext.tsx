"use client";

import { onAuthStateChanged } from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ChildrenProp } from "../utils/types/types";
import { auth } from "../firebase/firebase";
import { getFullUserData } from "../firebase/userData";

const FirebaseUserContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  state: stateProps;
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
};

type stateProps = {
  profileSettings: {
    name: string;
    recentAvatars: string[];
    recentBackgrounds: string[];
    createdAt: string;
  };
  id: string;
};

const enum REDUCER_ACTION_TYPE {
  SET_USER_PROFILE,
  SET_ID,
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
  | { type: REDUCER_ACTION_TYPE.RESET_STATE };

const initialState: stateProps = {
  profileSettings: {
    name: "",
    createdAt: "",
    recentAvatars: [],
    recentBackgrounds: [],
  },
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initialRender);

    return unsubscribe;
  }, []);

  return (
    <FirebaseUserContext.Provider
      value={{
        state,
        isLoggedIn,
        isLoading,
        setUserProfile,
        setRegisterUserData,
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
