"use client";

import { createContext, useContext, useState } from "react";
import { ChildrenProp } from "../../utils/types/types";

const ProfileSettingsContext = createContext<ContextType | undefined>(
  undefined,
);

type ProfileSettingsType = {
  name: string;
  recentAvatars: string[];
  recentBackgrounds: string[];
  createdAt: string;
};

type ContextType = {
  profileSettings: ProfileSettingsType;
  setNewProfileSettings: (newSettings: ProfileSettingsType) => void;
  getCurrentAvatar: () => string;
  getCurrentBackground: () => string;
};

function ProfileSettingsProvider({ children }: ChildrenProp) {
  const [profileSettings, setProfileSettings] = useState<ProfileSettingsType>({
    name: "",
    recentAvatars: [],
    recentBackgrounds: [],
    createdAt: "",
  });

  function setNewProfileSettings(newSettings: ProfileSettingsType) {
    setProfileSettings(newSettings);
  }

  function getCurrentAvatar() {
    return profileSettings.recentAvatars.at(0);
  }

  function getCurrentBackground() {
    return profileSettings.recentBackgrounds.at(0);
  }

  return (
    <ProfileSettingsContext.Provider
      value={{
        profileSettings,
        setNewProfileSettings,
        getCurrentAvatar,
        getCurrentBackground,
      }}
    >
      {children}
    </ProfileSettingsContext.Provider>
  );
}

function useProfileSettings() {
  const value = useContext(ProfileSettingsContext);
  if (value === undefined)
    throw new Error("ProfileSettings context was used outside of a provider");
  return value;
}

export { useProfileSettings, ProfileSettingsProvider };
