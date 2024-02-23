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
import rockstarVid from "../../public/video/rockstar.mp4";
import warnerVid from "../../public/video/wb.mp4";
import eaVid from "../../public/video/ea.mp4";
import sonyVid from "../../public/video/sony.mp4";
import cdpVid from "../../public/video/cdp.mp4";
import ubisoftVid from "../../public/video/ubisoft.mp4";

export const API_KEY = "041a371c18934671bc7c7df826093657";

export const currentDate = new Date();

export const heroImages = [heroBg0, heroBg1, heroBg2, heroBg3, heroBg4];

export const devList = [
  {
    name: "Rockstar Games",
    video: rockstarVid,
    slug: "rockstar-games",
    logo: rockstar,
    gameSeries: ["Grand Theft Auto", "Red Dead Redemption"],
  },
  {
    name: "Warner Bros Interactive",
    video: warnerVid,
    slug: "warner-bros-interactive",
    logo: warner,
    gameSeries: ["Hogwarts Legacy", "Middle Earth"],
  },
  {
    name: "Ubisoft",
    video: ubisoftVid,
    slug: "ubisoft",
    logo: ubisoft,
    gameSeries: ["Assasin's Creed", "Far Cry"],
  },
  {
    name: "Sony Interactive Entertainment",
    video: sonyVid,
    slug: "sony-interactive-entertainment",
    logo: sony,
    gameSeries: ["God of War", "Uncharted"],
  },
  {
    name: "Electronic Arts",
    video: eaVid,
    slug: "electronic-arts",
    logo: ea,
    gameSeries: ["Battlefied", "Dragon Age"],
  },
  {
    name: "CD Projekt Red",
    video: cdpVid,
    slug: "cd-projekt-red",
    logo: cdp,
    gameSeries: ["The Witcher", "Cyberpunk 2077"],
  },
];

export const platforms = [
  { name: "Windows", icon: SiWindows, id: "4" },
  { name: "PlayStation", icon: SiPlaystation, id: "187" },
  { name: "Xbox", icon: SiXbox, id: "1" },
  { name: "Ios", icon: SiApple, id: "3" },
  { name: "Android", icon: SiAndroid, id: "21" },
  { name: "Nintendo", icon: SiNintendoswitch, id: "7" },
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
  { url: "overview", name: "Overview" },
  { url: "library", name: "Library" },
  { url: "wishlist", name: "Wishlist" },
  { url: "reviews", name: "Reviews" },
  { url: "collections", name: "Collections" },
];

export const browseByPages = [
  { url: "developers", name: "Developers" },
  { url: "genres", name: "Genres" },
  { url: "platforms", name: "Platforms" },
];
