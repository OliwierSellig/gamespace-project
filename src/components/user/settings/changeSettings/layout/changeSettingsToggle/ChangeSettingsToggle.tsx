"use client";

import { useUser } from "../../../../../../contexts/UserContext";
import { UserSettingsProvider } from "../../../../../../contexts/UserSettingsContext";
import ChangeSettingsPopup from "../changeSettingPopup/ChangeSettingsPopup";

function ChangeSettingsToggle() {
  const { state } = useUser();

  const { areSettingsOpen } = state;

  if (areSettingsOpen) return null;
  return (
    <UserSettingsProvider>
      <ChangeSettingsPopup />
    </UserSettingsProvider>
  );
}

export default ChangeSettingsToggle;
