import {
  ActivityItem,
  BasicItemType,
  CollectionItemType,
  LibraryItemType,
  ReviewType,
} from "./types";

export type FirestoreUser = {
  profileSettings: {
    gamespaceName: string;
    createdAt: string;
    recentAvatars: string[];
    recentBackgrounds: string[];
  };
  library: LibraryItemType[];
  wishlist: BasicItemType[];
  activities: ActivityItem[];
  reviews: ReviewType[];
  collections: CollectionItemType[];
};

export type FirestoreCollectionType =
  | "library"
  | "wishlist"
  | "reviews"
  | "collections"
  | "activities";
