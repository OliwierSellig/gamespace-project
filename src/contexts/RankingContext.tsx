"use client";

import { createContext, useContext, useReducer } from "react";
import { currentDate } from "../utils/data/global";
import { getMonthSig, getYearList } from "../utils/functions/functions";
import { ChildrenProp, FetchedGameItem } from "../utils/types/types";

const RankingContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  state: stateProps;
  monthList: string[];
  yearList: string[];
  setDateFrom: (newDate: { year: number; month: number; day: number }) => void;
  setDateTo: (newDate: { year: number; month: number; day: number }) => void;
  isBorderDate: (
    type: "min" | "max",
    date: "month" | "year" | "day",
    currentDate: { year: number; month: number; day: number },
    borderDate: { year: number; month: number; day: number },
    gap?: number,
  ) => boolean;
};

type stateProps = {
  dateFrom: { year: number; month: number; day: number };
  dateTo: { year: number; month: number; day: number };
  rankedGamesList: FetchedGameItem[];
};

const enum REDUCER_ACTION_TYPE {
  SET_DATE_FROM,
  SET_DATE_TO,
  SET_GAME_LIST,
}

type ReducerAction =
  | {
      type: REDUCER_ACTION_TYPE.SET_DATE_FROM | REDUCER_ACTION_TYPE.SET_DATE_TO;
      payload: { year: number; month: number; day: number };
    }
  | {
      type: REDUCER_ACTION_TYPE.SET_GAME_LIST;
      payload: FetchedGameItem[];
    };

const initialState: stateProps = {
  dateFrom: {
    year: currentDate.getFullYear() - 1,
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
  },
  dateTo: {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
  },
  rankedGamesList: [],
};

function reducer(state: stateProps, action: ReducerAction): stateProps {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_DATE_FROM:
      return { ...state, dateFrom: action.payload };
    case REDUCER_ACTION_TYPE.SET_DATE_TO:
      return { ...state, dateTo: action.payload };
    case REDUCER_ACTION_TYPE.SET_GAME_LIST:
      return { ...state, rankedGamesList: action.payload };
    default:
      throw new Error("Undefined reducer action");
  }
}

function RankingProvider({ children }: ChildrenProp) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const monthList = Array.from({ length: 12 }, (_, i) => getMonthSig(i));
  const yearList = getYearList(2003).map((year) => year.toString());

  function setDateFrom(newDate: { year: number; month: number; day: number }) {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_DATE_FROM,
      payload: newDate,
    });
  }

  function setDateTo(newDate: { year: number; month: number; day: number }) {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_DATE_TO,
      payload: newDate,
    });
  }

  function isBorderDate(
    type: "min" | "max",
    date: "month" | "year" | "day",
    currentDate: { year: number; month: number; day: number },
    borderDate: { year: number; month: number; day: number },
    gap = 7,
  ) {
    const current = new Date(
      currentDate.year + (date === "year" ? (type === "max" ? 1 : -1) : 0),
      currentDate.month + (date === "month" ? (type === "max" ? 1 : -1) : 0),
      currentDate.day + (date === "day" ? (type === "max" ? 1 : -1) : 0),
    );

    const border = new Date(borderDate.year, borderDate.month, borderDate.day);

    if (type === "max") border.setDate(border.getDate() - gap);
    if (type === "min") current.setDate(current.getDate() - gap);

    return type === "max" ? current > border : current < border;
  }

  return (
    <RankingContext.Provider
      value={{
        state,
        monthList,
        yearList,
        setDateFrom,
        setDateTo,
        isBorderDate,
      }}
    >
      {children}
    </RankingContext.Provider>
  );
}

function useRanking() {
  const value = useContext(RankingContext);
  if (value === undefined)
    throw new Error("Ranking context was used outside of a provider");
  return value;
}

export { useRanking, RankingProvider };
