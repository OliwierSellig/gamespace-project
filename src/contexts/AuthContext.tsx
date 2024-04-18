"use client";

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { ChildrenProp } from "../utils/types/types";
import { auth } from "../firebase/firebase";

const AuthContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  currentUser: object | null;
  userLoggedIn: boolean;
  loading: boolean;
};
function AuthProvider({ children }: ChildrenProp) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  async function initializeUser(user: object) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userLoggedIn,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const value = useContext(AuthContext);
  if (value === undefined)
    throw new Error("Auth context was used outside of a provider");
  return value;
}

export { useAuth, AuthProvider };
