"use client";

import { FormikProvider, useFormik } from "formik";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import * as yup from "yup";
import { ChildrenProp } from "../utils/types/types";
import { useUser } from "./UserContext";

const UserSettingsContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  avatar: File | null;
  setNewAvatar: (avatar: File | null) => void;
  background: File | null;
  setNewBackground: (background: File | null) => void;
  newName: string;
  setNewName: (nme: string) => void;
  saveChanges: () => void;
  unsavedPopup: boolean;
  closeUnsavedPopup: () => void;
  leaveUserSettings: () => void;
};

type initialValues = {
  newName: string;
};

export const validationSchema = yup.object().shape({
  newName: yup
    .string()
    .min(3, "Minimum 3 characters")
    .max(25, "Maximum 25 characters"),
});

function UserSettingsProvider({ children }: ChildrenProp) {
  const { setSettings } = useUser();
  const [unsavedPopup, setUnsavedPopup] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<File | null>(null);
  const [background, setBackground] = useState<File | null>(null);
  const formik = useFormik<initialValues>({
    initialValues: {
      newName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  function setNewName(name: string) {
    formik.setFieldValue("newName", name);
  }

  function setNewAvatar(avatar: File | null) {
    setAvatar(avatar);
  }

  function setNewBackground(background: File | null) {
    setBackground(background);
  }

  function saveChanges() {
    toast.success("Profile updated successfully");
    setSettings(false);
  }

  function leaveUserSettings() {
    if (avatar || background || formik.values.newName) {
      setUnsavedPopup(true);
    } else {
      setSettings(false);
    }
  }

  function closeUnsavedPopup() {
    setUnsavedPopup(false);
  }

  return (
    <UserSettingsContext.Provider
      value={{
        avatar,
        setNewAvatar,
        background,
        setNewBackground,
        newName: formik.values.newName,
        setNewName,
        saveChanges,
        unsavedPopup,
        closeUnsavedPopup,
        leaveUserSettings,
      }}
    >
      <FormikProvider value={formik}>{children}</FormikProvider>
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
