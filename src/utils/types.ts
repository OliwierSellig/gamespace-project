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
  metacritic?: number;
  name: string;
  slug: string;
  parent_platforms?: GamePlatformItem[];
  platforms?: GamePlatformItem[];
  rating?: number;
  ratings?: GameRatingItem[];
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
