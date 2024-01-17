import { platformsIcons } from "./data";

export function getPlatformIcon(id: number) {
  return platformsIcons.find((platform) => platform.id === id).icon;
}

export function dateTransform(date = new Date()) {
  const transformed = `${setToDoubleDigit(date.getDate())}.${setToDoubleDigit(
    date.getMonth() + 1
  )}.${date.getFullYear()}`;
  return transformed;
}

export function getCurrentDate() {
  return dateTransform(new Date());
}

export function setToDoubleDigit(number: number) {
  return number >= 0 && String(number).length < 2 ? `0${number}` : number;
}

export function generateRandomID() {
  const randomID = Math.ceil(Math.random() * 100000);
  return randomID;
}

export function getCurrentItemSize(itemSizes: {
  default: number;
  sizes: { itemSize: number; windowWidth: number }[];
}) {
  const sorted = itemSizes.sizes.sort((a, b) => b.windowWidth - a.windowWidth);

  if (window.innerWidth > sorted[0]?.windowWidth) {
    return itemSizes.default;
  } else {
    const size = sorted.find((item, i) => {
      return (
        window.innerWidth <= sorted[i].windowWidth &&
        window.innerWidth > (sorted[i + 1]?.windowWidth || 0)
      );
    })?.itemSize;

    return size;
  }
}
