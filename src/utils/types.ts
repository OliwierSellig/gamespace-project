import { ReactNode } from "react";

export type ChildrenProp = { children: ReactNode };

type GameGenreItem = {
  id: number;
  name: string;
  slug: string;
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
