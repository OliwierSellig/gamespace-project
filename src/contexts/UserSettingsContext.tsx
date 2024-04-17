"use client";

import { createContext, useContext, useState } from "react";
import { ChildrenProp } from "../utils/types/types";

const UserSettingsContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  avatar: File | null | string;
  setNewAvatar: (avatar: File | null | string) => void;
  background: File | null | string;
  setNewBackground: (background: File | null | string) => void;
};
function UserSettingsProvider({ children }: ChildrenProp) {
  const [avatar, setAvatar] = useState<File | null | string>(null);
  const [background, setBackground] = useState<File | null | string>(null);

  function setNewAvatar(avatar: File | null | string) {
    setAvatar(avatar);
  }

  function setNewBackground(background: File | null | string) {
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
