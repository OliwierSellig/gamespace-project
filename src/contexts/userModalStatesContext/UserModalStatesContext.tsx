"use client";

import { createContext, useContext, useState } from "react";
import { ChildrenProp } from "../../utils/types/types";

const UserModalStatesContext = createContext<ContextType | undefined>(
  undefined,
);

type ContextType = {
  isLoggingOut: boolean;
  inSettingsView: boolean;
  setLoggingOut: (isLoggingOut: boolean) => void;
  setSettingsView: (inSettingsView: boolean) => void;
};
function UserModalStatesProvider({ children }: ChildrenProp) {
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
  const [inSettingsView, setInSettingsView] = useState<boolean>(false);

  function setLoggingOut(isLoggingOut: boolean) {
    setIsLoggingOut(isLoggingOut);
  }

  function setSettingsView(inSettingsView: boolean) {
    setInSettingsView(inSettingsView);
  }

  return (
    <UserModalStatesContext.Provider
      value={{
        isLoggingOut,
        setLoggingOut,
        inSettingsView,
        setSettingsView,
      }}
    >
      {children}
    </UserModalStatesContext.Provider>
  );
}

function useUserModalStates() {
  const value = useContext(UserModalStatesContext);
  if (value === undefined)
    throw new Error("UserModalStates context was used outside of a provider");
  return value;
}

export { useUserModalStates, UserModalStatesProvider };
