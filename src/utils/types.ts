import { ReactNode } from "react";
import { IconType } from "react-icons";

export type ChildrenProp = { children: ReactNode };

export type GameGenreItem = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

type GamePlatformItem = {
  id: number;
  name: string;
  slug: string;
};

type GameRatingItem = {
  id: number;
  title: string;
  count: number;
  percent: number;
};

type GameStoreItem = {
  id: number;
  name: string;
  slug: string;
};

type GameShortScreenshotItem = {
  id: number;
  image: string;
};

type GameTagItem = {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
};

export type FetchedGameData = {
  count: number;
  results: FetchedGameItem[];
};

export type FetchedGameItem = {
  added?: number;
  background_image?: string;
  esrb_rating: {
    id?: number;
    name?: string;
    slug?: string;
  };
  genres?: GameGenreItem[];
  id?: number;
  metacritic?: number | null;
  name: string;
  slug: string;
  parent_platforms?: GamePlatformItem[];
  platforms?: GamePlatformItem[];
  rating?: number;
  ratings?: GameRatingItem[] | undefined;
  ratings_count?: number;
  released?: string;
  short_screenshots?: GameShortScreenshotItem[];
  stores?: GameStoreItem[];
  tags?: GameTagItem[];
  playtime?: number;
};

export type GenreItem = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type ImageSizesType = {
  defalult: { number: number; unit: "px" | "vw" };
  sizes?: { maxWidth: number; size: { number: number; unit: "px" | "vw" } }[];
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

export type SingleGameItem = {
  id: number;
  name: string;
  slug: string;
  added: number;
  background_image: string;
  background_image_additional: string;
  esrb_rating: EsrbRatingType;
  released: string;
  playtime: number;
  ratings: GameRatingItem[] | undefined;
  reviews_count: number;
  genres: GameGenreItem[];
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
  metacritic: number;
  rating: number;
  tags: {
    games_count: number;
    id: number;
    image_background: string;
    name: string;
    slug: string;
    language: string;
  }[];
};

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

export type EsrbRatingType = {
  id?: number;
  name?: string;
  slug?: string;
};

export type GameDeveloperType = {
  games_count: number;
  id: number;
  image_background: number;
  name: string;
  slug: number;
};

export type dateType = {
  year: number;
  month: number;
  day: number;
};

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

export type SingleScreenshotItem = {
  id: number;
  image: string;
  height: number;
  width: number;
  is_deleted: boolean;
};

export type FetchedScreenshotItem = {
  count: number;
  results: SingleScreenshotItem[];
};

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

export type LogItemType = {
  date: string;
  actions: { sub: string; link: { name: string; href: string } }[];
};

export type UserGameItem = {
  name?: string;
  slug?: string;
  id?: number;
  background_image?: string;
  added?: number;
};

export type SocialPlatformType = {
  name: string;
  icon: IconType;
  url: string;
  color: string;
};

export type UserListItem = FetchedGameItem & {
  action: {
    handleClick: () => void;
    actionLabel: string;
    actionIcon: IconType;
  };
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

export type ActionType = {
  actionLabel: string;
  actionIcon: IconType;
  handleClick: () => void;
};

export type ReviewType = {
  game: { id: number; name: string; cover: string };
  rating: number;
  author: string;
  editDate: Date;
  content: string;
};

export type PaddingType = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};

export type CollectionPropsType = {
  title: string;
  author: string;
  creationDate: Date;
  description: string;
  games: BasicItemType[];
};

export type CollectionItemType = CollectionPropsType & { id: number };
