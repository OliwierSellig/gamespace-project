"use client";

import { createContext, useContext, useState } from "react";
import { ChildrenProp } from "../utils/types/types";

const UserSettingsContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  avatar: File | null;
  setNewAvatar: (avatar: File | null) => void;
  background: File | null;
  setNewBackground: (background: File | null) => void;
};
function UserSettingsProvider({ children }: ChildrenProp) {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [background, setBackground] = useState<File | null>(null);

  function setNewAvatar(avatar: File | null) {
    setAvatar(avatar);
  }

  function setNewBackground(background: File | null) {
    setBackground(background);
  }

  return (
    <UserSettingsContext.Provider
      value={{
        avatar,
        setNewAvatar,
        background,
        setNewBackground,
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
}

function useUserSettings() {
  const value = useContext(UserSettingsContext);
  if (value === undefined)
    throw new Error("User Settings context was used outside of a provider");
  return value;
}

export { useUserSettings, UserSettingsProvider };
