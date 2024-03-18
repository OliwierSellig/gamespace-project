import { FaInstagram, FaFacebookF, FaYoutube, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import heroBg0 from "../../public/img/hero-background-0.webp";
import heroBg1 from "../../public/img/hero-background-1.webp";
import heroBg2 from "../../public/img/hero-background-2.webp";
import heroBg3 from "../../public/img/hero-background-3.webp";
import heroBg4 from "../../public/img/hero-background-4.webp";
import {
  SiAndroid,
  SiNintendoswitch,
  SiWindows,
  SiPlaystation,
  SiXbox,
  SiApple,
} from "react-icons/si";
import warner from "../../public/svg/warner.svg";
import rockstar from "../../public/svg/rockstar.svg";
import ea from "../../public/svg/ea.svg";
import cdp from "../../public/svg/cdp.svg";
import sony from "../../public/svg/sony.svg";
import ubisoft from "../../public/svg/ubisoft.svg";
import { SocialPlatformType } from "./types";

export const API_KEY = "041a371c18934671bc7c7df826093657";

export const currentDate = new Date();

export const heroImages = [heroBg0, heroBg1, heroBg2, heroBg3, heroBg4];

export const devList = [
  {
    name: "Rockstar Games",
    video:
      "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/rockstar.mp4?alt=media&token=bccb561f-6927-4396-81f5-2b674d05be3c",
    slug: "rockstar-games",
    logo: rockstar,
    gameSeries: ["Grand Theft Auto", "Red Dead Redemption"],
  },
  {
    name: "Warner Bros Interactive",
    video:
      "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/wb.mp4?alt=media&token=5f8d8238-58a0-47fc-9e69-4de0e9cbd46b",
    slug: "warner-bros-interactive",
    logo: warner,
    gameSeries: ["Hogwarts Legacy", "Middle Earth"],
  },
  {
    name: "Ubisoft",
    video:
      "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/ubisoft.mp4?alt=media&token=77a846fd-8b69-4127-ab1d-a4067359fd75",
    slug: "ubisoft",
    logo: ubisoft,
    gameSeries: ["Assasin's Creed", "Far Cry"],
  },
  {
    name: "Sony Interactive Entertainment",
    video:
      "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/sony.mp4?alt=media&token=4633e379-b2b9-4c4b-9766-a67f4b47aa8d",
    slug: "sony-interactive-entertainment",
    logo: sony,
    gameSeries: ["God of War", "Uncharted"],
  },
  {
    name: "Electronic Arts",
    video:
      "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/ea.mp4?alt=media&token=67bbe704-ab7c-4448-9d13-e4b3e98721c8",
    slug: "electronic-arts",
    logo: ea,
    gameSeries: ["Battlefied", "Dragon Age"],
  },
  {
    name: "CD Projekt Red",
    video:
      "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/cdp.mp4?alt=media&token=4b019caa-6391-4a28-a715-70697c117eef",
    slug: "cd-projekt-red",
    logo: cdp,
    gameSeries: ["The Witcher", "Cyberpunk 2077"],
  },
];

export const platforms = [
  { name: "Windows", icon: SiWindows, id: 4 },
  { name: "PlayStation", icon: SiPlaystation, id: 187 },
  { name: "Xbox", icon: SiXbox, id: 1 },
  { name: "Ios", icon: SiApple, id: 3 },
  { name: "Android", icon: SiAndroid, id: 21 },
  { name: "Nintendo", icon: SiNintendoswitch, id: 7 },
];

export const platformsIcons = [
  { id: 1, icon: "/svg/windows.svg" },
  { id: 2, icon: "/svg/playstation.svg" },
  { id: 3, icon: "/svg/xbox.svg" },
  { id: 4, icon: "/svg/ios.svg" },
  { id: 5, icon: "/svg/android.svg" },
  { id: 6, icon: "/svg/apple.svg" },
  { id: 7, icon: "/svg/linux.svg" },
  { id: 8, icon: "/svg/nintendo.svg" },
  { id: 9, icon: "/svg/atari.svg" },
  { id: 10, icon: "/svg/commodore.svg" },
  { id: 11, icon: "/svg/sega.svg" },
  { id: 12, icon: "/svg/3do.svg" },
  { id: 13, icon: "/svg/neogeo.svg" },
  { id: 14, icon: "/svg/web.svg" },
];

export const userNavPages = [
  { url: "/user/overview", name: "Overview" },
  { url: "/user/library", name: "Library" },
  { url: "/user/wishlist", name: "Wishlist" },
  { url: "/user/reviews", name: "Reviews" },
  { url: "/user/collections", name: "Collections" },
];

export const browseByPages = [
  { url: "developers", name: "Developers" },
  { url: "genres", name: "Genres" },
  { url: "platforms", name: "Platforms" },
];

export const socials: SocialPlatformType[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: FaFacebookF,
    color: "#316FF6",
  },
  {
    name: "Twitter/X",
    url: "https://twitter.com/",
    icon: FaXTwitter,
    color: "#2C2C2C",
  },
  {
    name: "Discord",
    url: "https://discord.com/app",
    icon: FaDiscord,
    color: "#7289DA",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: FaInstagram,
    color: "#E4405F",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/",
    icon: FaYoutube,
    color: "#FF0000",
  },
];

export const filterList = [
  "All games",
  "Developer",
  "Genre",
  "Platform",
  "Year of release",
];

export const orderList = ["Relevance", "Release Date", "Popularity", "Rating"];

export const reviewOrderList = ["Relevance", "Rating", "Game Title"];

export const filterActivities = [
  "All Activities",
  "Library",
  "Wishlist",
  "Favourites",
  "Reviews",
  "Collections",
];
