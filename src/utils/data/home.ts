import {
  SiAndroid,
  SiApple,
  SiNintendoswitch,
  SiPlaystation,
  SiWindows,
  SiXbox,
} from "react-icons/si";
import cdp from "../../../public/svg/cdp.svg";
import ea from "../../../public/svg/ea.svg";
import rockstar from "../../../public/svg/rockstar.svg";
import sony from "../../../public/svg/sony.svg";
import ubisoft from "../../../public/svg/ubisoft.svg";
import warner from "../../../public/svg/warner.svg";
import heroBg0 from "../../../public/img/hero-background-0.webp";
import heroBg1 from "../../../public/img/hero-background-1.webp";
import heroBg2 from "../../../public/img/hero-background-2.webp";
import heroBg3 from "../../../public/img/hero-background-3.webp";
import heroBg4 from "../../../public/img/hero-background-4.webp";

export const heroImages = [heroBg0, heroBg1, heroBg2, heroBg3, heroBg4];

export const devList = [
  {
    name: "Rockstar Games",
    video:
      "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/rockstar.mp4?alt=media&token=bccb561f-6927-4396-81f5-2b674d05be3c",
    logo: rockstar,
    gameSeries: ["Grand Theft Auto", "Red Dead Redemption"],
    id: 10,
  },
  {
    name: "Warner Bros Interactive",
    video:
      "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/wb.mp4?alt=media&token=5f8d8238-58a0-47fc-9e69-4de0e9cbd46b",
    logo: warner,
    gameSeries: ["Hogwarts Legacy", "Middle Earth"],
    id: 3,
  },
  {
    name: "Ubisoft",
    video:
      "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/ubisoft.mp4?alt=media&token=77a846fd-8b69-4127-ab1d-a4067359fd75",
    logo: ubisoft,
    gameSeries: ["Assasin's Creed", "Far Cry"],
    id: 405,
  },
  {
    name: "Sony Interactive Entertainment",
    video:
      "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/sony.mp4?alt=media&token=4633e379-b2b9-4c4b-9766-a67f4b47aa8d",
    logo: sony,
    gameSeries: ["God of War", "Uncharted"],
    id: 18720,
  },
  {
    name: "Electronic Arts",
    video:
      "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/ea.mp4?alt=media&token=67bbe704-ab7c-4448-9d13-e4b3e98721c8",
    logo: ea,
    gameSeries: ["Battlefied", "Dragon Age"],
    id: 109,
  },
  {
    name: "CD Projekt Red",
    video:
      "https://firebasestorage.googleapis.com/v0/b/gamespace-36145.appspot.com/o/cdp.mp4?alt=media&token=4b019caa-6391-4a28-a715-70697c117eef",
    logo: cdp,
    gameSeries: ["The Witcher", "Cyberpunk 2077"],
    id: 9023,
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
