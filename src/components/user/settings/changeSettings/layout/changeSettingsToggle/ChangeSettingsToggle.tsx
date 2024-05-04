"use client";

import { useUser } from "../../../../../../contexts/userContext/UserContext";
import { UserSettingsProvider } from "../../../../../../contexts/userSettingsContext/UserSettingsContext";
import ChangeSettingsPopup from "../changeSettingPopup/ChangeSettingsPopup";

function ChangeSettingsToggle() {
  const { state } = useUser();

  const { areSettingsOpen } = state;

  if (!areSettingsOpen) return null;
  return (
    <UserSettingsProvider>
      <ChangeSettingsPopup />
    </UserSettingsProvider>
  );
}

export default ChangeSettingsToggle;
