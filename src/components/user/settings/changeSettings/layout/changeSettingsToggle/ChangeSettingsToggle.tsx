"use client";

import { useUserModalStates } from "../../../../../../contexts/userModalStatesContext/UserModalStatesContext";
import { UserSettingsProvider } from "../../../../../../contexts/userSettingsContext/UserSettingsContext";
import ChangeSettingsPopup from "../changeSettingPopup/ChangeSettingsPopup";

function ChangeSettingsToggle() {
  const { inSettingsView } = useUserModalStates();

  if (!inSettingsView) return null;
  return (
    <UserSettingsProvider>
      <ChangeSettingsPopup />
    </UserSettingsProvider>
  );
}

export default ChangeSettingsToggle;
