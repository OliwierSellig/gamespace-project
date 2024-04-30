import { LibraryItemType } from "./types";

export type FirestoreUser = {
  profileSettings: {
    gamespaceName: string;
    createdAt: string;
    recentAvatars: string[];
    recentBackgrounds: string[];
  };
  library: LibraryItemType[];
};
