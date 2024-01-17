import bethesdaDev from "../../public/img/bethesda-dev.webp";
import wbDev from "../../public/img/wb-dev.webp";
import ubisoftDev from "../../public/img/ubisoft-dev.webp";
import sonyDev from "../../public/img/sony-dev.webp";
import eaDev from "../../public/img/ea-dev.webp";
import cdpDev from "../../public/img/cdp-dev.webp";
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

export const API_KEY = "041a371c18934671bc7c7df826093657";

export const currentDate = new Date();

export const heroImages = [heroBg0, heroBg1, heroBg2, heroBg3, heroBg4];

export const devList = [
  {
    name: "Bethesda Softworks",
    img: bethesdaDev,
    slug: "bethesda-softworks",
  },
  {
    name: "Warner Bros Interactive",
    img: wbDev,
    slug: "warner-bros-interactive",
  },
  {
    name: "Ubisoft",
    img: ubisoftDev,
    slug: "ubisoft",
  },
  {
    name: "Sony Interactive Entertainment",
    img: sonyDev,
    slug: "sony-interactive-entertainment",
  },
  {
    name: "Electronic Arts",
    img: eaDev,
    slug: "electronic-arts",
  },
  {
    name: "CD Projekt Red",
    img: cdpDev,
    slug: "cd-projekt-red",
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

export const loadingStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "5rem",
  padding: "8rem",
  textAlign: "center",
  lineHeight: "1.2",
};
