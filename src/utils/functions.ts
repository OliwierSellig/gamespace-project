import { currentDate, platformsIcons } from "./data";

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

export function setToDoubleDigit(item: number | string) {
  const num = typeof item === "string" ? item : item.toString();
  return num.length <= 1
    ? num.startsWith("-")
      ? `${num.at(0)}0${num.slice(1)}`
      : `0${item}`
    : item;
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

  if (window.screen.width > sorted[0]?.windowWidth) {
    return itemSizes.default;
  } else {
    const size = sorted.find((item, i) => {
      return (
        window.screen.width <= sorted[i].windowWidth &&
        window.screen.width > (sorted[i + 1]?.windowWidth || 0)
      );
    })?.itemSize;

    return size;
  }
}

export function getMonthSig(monthNumber: number) {
  switch (monthNumber) {
    case 0:
      return "JAN";
    case 1:
      return "FEB";
    case 2:
      return "MAR";
    case 3:
      return "APR";
    case 4:
      return "MAY";
    case 5:
      return "JUN";
    case 6:
      return "JUL";
    case 7:
      return "AUG";
    case 8:
      return "SEP";
    case 9:
      return "OCT";
    case 10:
      return "NOV";
    case 11:
      return "DEC";
    default:
      return null;
  }
}

export function getMonthNumber(month: string) {
  switch (month) {
    case "JAN":
      return 0;
    case "FEB":
      return 1;
    case "MAR":
      return 2;
    case "APR":
      return 3;
    case "MAY":
      return 4;
    case "JUN":
      return 5;
    case "JUL":
      return 6;
    case "AUG":
      return 7;
    case "SEP":
      return 8;
    case "OCT":
      return 9;
    case "NOV":
      return 10;
    case "DEC":
      return 11;

    default:
      throw new Error("Not found such month");
  }
}

export function getDayList(year: number, month: number) {
  const daysAmount = new Date(year, month, 0).getDate();

  const arr = Array.from({ length: daysAmount }, (_, i) => i + 1);

  return arr;
}

export function getYearList(startYear: number) {
  if (
    startYear > currentDate.getFullYear() ||
    startYear < currentDate.getFullYear() - 30
  )
    return null;

  const arr = Array.from(
    { length: currentDate.getFullYear() - startYear + 1 },
    (_, i) => startYear + i
  );

  return arr;
}
