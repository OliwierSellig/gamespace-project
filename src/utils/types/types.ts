import { ReactNode } from "react";
import { IconType } from "react-icons";

export type ChildrenProp = { children: ReactNode };

// Games --------------------------------------

type BasicGameItem = {
  id: number;
  name: string;
  slug: string;
  added: number;
  background_image: string;
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  };
  genres: GameGenreItem[];
  metacritic: number | null;
  released: string;
  playtime: number;
  ratings: { id: number; title: string; count: number; percent: number }[];
  tags: {
    games_count: number;
    id: number;
    image_background: string;
    name: string;
    slug: string;
    language: string;
  }[];
  rating: number;
};

export type FetchedGameItem = BasicGameItem & {
  parent_platforms?: { id: number; name: string; slug: string };
  platforms?: { id: number; name: string; slug: string };
  ratings_count?: number;
};

export type SingleGameItem = BasicGameItem & {
  background_image_additional: string;
  reviews_count: number;
  stores: {
    id: number;
    url: string;
    store: {
      id: number;
      name: string;
      slug: string;
      domain: string;
      games_count: number;
      image_background: string;
    };
  }[];
  description: string;
  description_raw: string;
  platforms: PlatformType[];
  developers: GameDeveloperType[];
};

export type GameGenreItem = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type FetchedGameData = {
  count: number;
  results: FetchedGameItem[];
};

export type fetchGamesProps = {
  page?: number;
  pageSize?: number;
  search?: string;
  parentPlatforms?: number[];
  platforms?: number[];
  developers?: number[];
  genres?: number[];
  tags?: number[];
  dates?: {
    fromDay: number;
    fromMonth: number;
    fromYear: number;
    toDay: number;
    toMonth: number;
    toYear: number;
  };
  ordering?: {
    orderBy:
      | "name"
      | "released"
      | "added"
      | "created"
      | "updated"
      | "rating"
      | "metacritics";
    reversed?: boolean;
  };
  signal?: AbortSignal;
};

export type BasicItemType = {
  name: string;
  slug: string;
  id: number;
  cover: string;
  released: string;
  added: number;
  rating: number;
};

export type LibraryItemType = BasicItemType & {
  addedToLibraryDate: Date;
  genres: GameGenreItem[];
  platforms: PlatformType[];
  developers: GameDeveloperType[];
  isFavourite: boolean;
};

// Genres --------------------------------------

export type GenreItem = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

// Image Sizes ---------------------------------

export type ImageSizesType = {
  defalult: { number: number; unit: "px" | "vw" };
  sizes?: { maxWidth: number; size: { number: number; unit: "px" | "vw" } }[];
};

// Platforms ---------------------------------

export type PlatformType = {
  released_at: string;
  requirements: object;
  platform: {
    games_count: number;
    id: number;
    image: string;
    image_background: string;
    name: string;
    slug: string;
    year_end: number;
    year_start: number;
  };
};

// Esrb Rating  ---------------------------------

export type EsrbRatingType = {
  id?: number;
  name?: string;
  slug?: string;
};

// Developers  ---------------------------------

export type GameDeveloperType = {
  games_count: number;
  id: number;
  image_background: number;
  name: string;
  slug: number;
};

// Developers & Genres & Platforms ---------

export type fetchedParentProps = {
  pageSize: number;
  page: number;
};

export type fetchedParentType = {
  count: number;
  results: fetchedParentResult[];
};

export type fetchedParentResult = {
  games?: {
    added: number;
    id: number;
    name: string;
    slug: string;
  }[];
  top_games?: {
    id: number;
  }[];
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
};

type DetailedType = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_background: string;
  games_count: number;
};

export type SingleDevType = DetailedType;
export type SingleGenreType = DetailedType;
export type SinglePlatformType = DetailedType;

// Dates  ---------------------------------

export type dateType = {
  year: number;
  month: number;
  day: number;
};

// Screenshots  ---------------------------------

export type FetchedScreenshotItem = {
  count: number;
  results: SingleScreenshotItem[];
};

export type SingleScreenshotItem = {
  id: number;
  image: string;
  height: number;
  width: number;
  is_deleted: boolean;
};

// Achievements  ---------------------------------

export type FetchedAchievementsItem = {
  count: number;
  results: AchievementResult[];
};

export type AchievementResult = {
  id: number;
  name: string;
  description: string;
  image: string;
  percent: string;
};

// Acitvities ---------------------------------

export type LogItemType = {
  date: string;
  actions: { sub: string; link: { name: string; href: string } }[];
};

export type ActivityItem = {
  date: Date;
  action:
    | {
        type:
          | "addToLibrary"
          | "removeFromLibrary"
          | "addToWishlist"
          | "removeFromWishlist"
          | "publishReview"
          | "deleteReview"
          | "updateReview"
          | "startCollection"
          | "deleteCollection"
          | "updateCollection"
          | "addToFavourites"
          | "removeFromFavourites";
        item: { name: string; id: number };
      }
    | {
        type: "addGameToCollection" | "removeGameFromCollection";
        item: {
          gameId: number;
          collectionId: number;
          gameName: string;
          collectionName: string;
        };
      };
};

// Socials -----------------------------------

export type SocialPlatformType = {
  name: string;
  icon: IconType;
  url: string;
  color: string;
};

// Reviews -----------------------------------

export type ReviewType = {
  game: { id: number; name: string; cover: string };
  rating: number;
  author: string;
  editDate: Date;
  content: string;
};

// Collections -----------------------------------

export type CollectionPropsType = {
  title: string;
  author: string;
  creationDate: Date;
  description: string;
  games: BasicItemType[];
};

export type CollectionItemType = CollectionPropsType & { id: number };

// Others  -----------------------------------

export type ActionType = {
  actionLabel: string;
  actionIcon: IconType;
  handleClick: () => void;
};

export type PaddingType = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};
