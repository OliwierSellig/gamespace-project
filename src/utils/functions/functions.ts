import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { currentDate, socials } from "../data/global";
import {
  BasicItemType,
  ImageSizesType,
  SingleGameItem,
  SocialPlatformType,
} from "../types/types";

// ------- Transforms date to string DD.MM.YYYY -----------

export function dateTransform(date: Date | string = new Date()) {
  const dateItem = typeof date === "string" ? new Date(date) : date;
  const transformed = `${setToDoubleDigit(
    dateItem.getDate(),
  )}.${setToDoubleDigit(dateItem.getMonth() + 1)}.${dateItem.getFullYear()}`;
  return transformed;
}

// ------- Forces number to be double digit ex. 1 to 01 -----------

export function setToDoubleDigit(item: number | string) {
  const num = typeof item === "string" ? item : item.toString();
  return num.length <= 1
    ? num.startsWith("-")
      ? `${num.at(0)}0${num.slice(1)}`
      : `0${item}`
    : item;
}

// ------- Sets the first letter of the string to uppercase -----------

export function upperCaseFirstLetter(text: string) {
  if (!text || typeof text !== "string") return text;
  return `${text.at(0).toUpperCase()}${text.slice(1)}`;
}

// ------- Generates random id number -----------

export function generateRandomID() {
  const randomID = Math.ceil(Math.random() * 100000);
  return randomID;
}

// ------- Gets sizes for item -----------

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

// ------- Gets signature for given month ex.  0 - JAN -----------

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

// ------- Gets number for given month ex.  JAN - 0 -----------

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

// ------- Gets list of days of the given month and year -----------

export function getDayList(year: number, month: number) {
  const daysAmount = new Date(year, month, 0).getDate();

  const arr = Array.from({ length: daysAmount }, (_, i) => i + 1);

  return arr;
}

// ------- Gets list year from startYear to starYear - 30 -----------

export function getYearList(startYear: number) {
  if (
    startYear > currentDate.getFullYear() ||
    startYear < currentDate.getFullYear() - 30
  )
    return null;

  const arr = Array.from(
    { length: currentDate.getFullYear() - startYear + 1 },
    (_, i) => startYear + i,
  );

  return arr;
}

// ------- Gets social items by given order -----------

export function getSocialsByOrder(
  list: ("Youtube" | "Facebook" | "Twitter/X" | "Instagram" | "Discord")[],
) {
  const filteredArr: SocialPlatformType[] = [];

  list.forEach((item) => {
    if (socials.map((social) => social.name).includes(item)) {
      filteredArr.push(socials.find((social) => social.name === item));
    }
  });

  return filteredArr;
}

export function changeToUrlSlug(item: string) {
  return item.toLowerCase().trim().replaceAll(" ", "-");
}

// ------- Gets sizes for image -----------

export function getImageSizes(imageSizes: ImageSizesType) {
  const sizes =
    imageSizes?.sizes && imageSizes.sizes.length > 0
      ? imageSizes.sizes
          .sort((a, b) => a.maxWidth - b.maxWidth)
          .map(
            (item) =>
              `(max-width: ${item.maxWidth}px) ${item.size.number}${item.size.unit}`,
          )
          .join(", ")
          .concat(
            ", ",
            `${imageSizes.defalult.number}${imageSizes.defalult.unit}`,
          )
      : `${imageSizes.defalult.number}${imageSizes.defalult.unit}`;

  return sizes;
}

// ------- Ranks List by each string amount ex. [apple, banana, apple] => [{item: apple, amount: 2}, {item: banana, amount: 1}] -----------

export function rankList(list: string[], ascending = false) {
  const uniqueList = [...new Set(list)];
  const topList = uniqueList.map((item) => {
    return {
      item,
      amount: list.filter((i) => i === item).length,
    };
  });
  return topList.sort((a, b) =>
    ascending ? a.amount - b.amount : b.amount - a.amount,
  );
}

// ------- Sets SingleGameItem Objectto BasicItemType Object -----------

export function SingleGameItemToBasicItemType(game: SingleGameItem) {
  const basicItem: BasicItemType = {
    name: game.name,
    cover: game.background_image,
    slug: game.slug,
    id: game.id,
    added: game.added,
    rating: game.rating,
    released: game.released,
  };

  return basicItem;
}

// ------- Sets searchParams.page to given number -----------

export function setPage(
  router: AppRouterInstance,
  pathname: string,
  params: URLSearchParams,
  maxPage: number,
  p: number,
) {
  const current = new URLSearchParams(Array.from(params.entries()));
  current.set("page", p.toString());
  const search = current.toString();
  const query = search ? `?${search}` : "";
  if (p < 1 || p > maxPage) return;
  router.push(`${pathname}${query}`);
}

// ------- Check whether the differance in dates in bigger or than the given day amount  -----------

export function calculateDayDifferance(props: {
  dayDiff: number;
  date1: Date;
  date2: Date;
}) {
  const timeDiff = Math.abs(props.date1.getTime() - props.date2.getTime());

  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return diffDays > props.dayDiff;
}

// ------- Sorting games of given list type by given condition  -----------

export function sortGames(list: BasicItemType[], sortBy: string) {
  const sortList = [...list];

  switch (sortBy) {
    case "popularity":
      return sortList.sort((a, b) => b.added - a.added);
    case "release-date":
      return sortList.sort(
        (a, b) =>
          new Date(b.released).getTime() - new Date(a.released).getTime(),
      );
    case "rating":
      return sortList.sort((a, b) => b.rating - a.rating);
    default:
      return sortList;
  }
}
