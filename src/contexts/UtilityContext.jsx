import { createContext, useContext } from "react";

const UtilityContext = createContext();

function UtilityProvider({ children }) {
  const API_KEY = "041a371c18934671bc7c7df826093657";

  const devList = [
    {
      name: "Bethesda Softworks",
      img: {
        small: "img/devs/bethesda-dev-small.webp",
        medium: "img/devs/bethesda-dev-medium.webp",
        large: "img/devs/bethesda-dev-large.webp",
      },
      slug: "bethesda-softworks",
    },
    {
      name: "Warner Bros Interactive",
      img: {
        small: "img/devs/wb-dev-small.webp",
        medium: "img/devs/wb-dev-medium.webp",
        large: "img/devs/wb-dev-large.webp",
      },
      slug: "warner-bros-interactive",
    },
    {
      name: "Ubisoft",
      img: {
        small: "img/devs/ubisoft-dev-small.webp",
        medium: "img/devs/ubisoft-dev-medium.webp",
        large: "img/devs/ubisoft-dev-large.webp",
      },
      slug: "ubisoft",
    },
    {
      name: "Sony Interactive Entertainment",
      img: {
        small: "img/devs/sony-dev-small.webp",
        medium: "img/devs/sony-dev-medium.webp",
        large: "img/devs/sony-dev-large.webp",
      },
      slug: "sony-interactive-entertainment",
    },
    {
      name: "Electronic Arts",
      img: {
        small: "img/devs/ea-dev-small.webp",
        medium: "img/devs/ea-dev-medium.webp",
        large: "img/devs/ea-dev-large.webp",
      },
      slug: "electronic-arts",
    },
    {
      name: "CD Projekt Red",
      img: {
        small: "img/devs/cdp-dev-small.webp",
        medium: "img/devs/cdp-dev-medium.webp",
        large: "img/devs/cdp-dev-large.webp",
      },
      slug: "cd-projekt-red",
    },
  ];

  const platforms = [
    { name: "Windows", img: "svg/windows.svg", id: "4" },
    { name: "PlayStation", img: "svg/playstation.svg", id: "187" },
    { name: "Xbox", img: "svg/xbox.svg", id: "1" },
    { name: "Ios", img: "svg/ios.svg", id: "3" },
    { name: "Android", img: "svg/android.svg", id: "21" },
    { name: "Nintendo", img: "svg/nintendo.svg", id: "7" },
  ];

  const platformsIcons = [
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

  const loadingStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "5rem",
    padding: "8rem",
    textAlign: "center",
    lineHeight: "1.2",
  };

  function getPlatformIcon(id) {
    return platformsIcons.find((platform) => platform.id === id).icon;
  }

  function dateTransform(date = new Date()) {
    const transformed = `${setToDoubleDigit(date.getDate())}.${setToDoubleDigit(
      date.getMonth() + 1
    )}.${date.getFullYear()}`;
    return transformed;
  }

  function getCurrentDate() {
    return dateTransform(new Date());
  }

  function setToDoubleDigit(number) {
    return number < 10 ? `0${number}` : number;
  }

  function generateRandomID() {
    const randomID = Math.ceil(Math.random() * 100000);
    return randomID;
  }

  return (
    <UtilityContext.Provider
      value={{
        API_KEY,
        devList,
        platforms,
        platformsIcons,
        loadingStyle,
        getPlatformIcon,
        setToDoubleDigit,
        dateTransform,
        getCurrentDate,
        generateRandomID,
      }}
    >
      {children}
    </UtilityContext.Provider>
  );
}

function useUtility() {
  const value = useContext(UtilityContext);
  if (value === undefined)
    throw new Error("Utility context was used outside of a provider");

  return value;
}

export { UtilityProvider, useUtility };
