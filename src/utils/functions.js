import { platformsIcons } from "./data";

export function getPlatformIcon(id) {
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

export function setToDoubleDigit(number) {
  return number >= 0 && String(number).length < 2 ? `0${number}` : number;
}

export function generateRandomID() {
  const randomID = Math.ceil(Math.random() * 100000);
  return randomID;
}
