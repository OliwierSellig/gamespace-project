import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useUtility } from "./UtilityContext";
import { useParams, useSearchParams } from "react-router-dom";

const RankingContext = createContext();

const initialState = {
  dateFrom: { year: 2023, month: 1, day: 1 },
  dateTo: { year: 2023, month: 9, day: 1 },
  rankedGamesList: [],
  gameFilter: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "rankedGamesListSet":
      return {
        ...state,
        rankedGamesList: action.payload,
      };
    case "dateFromYearSet":
      return {
        ...state,
        dateFrom: { ...state.dateFrom, year: action.payload },
      };
    case "dateFromMonthSet":
      return {
        ...state,
        dateFrom: { ...state.dateFrom, month: action.payload },
      };
    case "dateFromDaySet":
      return {
        ...state,
        dateFrom: { ...state.dateFrom, day: action.payload },
      };
    case "dateToYearSet":
      return {
        ...state,
        dateTo: { ...state.dateTo, year: action.payload },
      };
    case "dateToMonthSet":
      return {
        ...state,
        dateTo: { ...state.dateTo, month: action.payload },
      };
    case "dateToDaySet":
      return {
        ...state,
        dateTo: { ...state.dateTo, day: action.payload },
      };
    case "gameFilterSet":
      return {
        ...state,
        gameFilter: action.payload,
      };

    default:
      throw new Error("Unknown Action");
  }
}

function RankingProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchParams] = useSearchParams();
  const { API_KEY, setToDoubleDigit } = useUtility();
  const { filter } = useParams();
  const { dateTo, dateFrom } = state;

  useEffect(() => {
    async function fetchRanking() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?dates=${
            dateFrom.year
          }-${setToDoubleDigit(dateFrom.month)}-${setToDoubleDigit(
            dateFrom.day
          )},${dateTo.year}-${setToDoubleDigit(
            dateTo.month
          )}-${setToDoubleDigit(dateTo.day)}&ordering=-${
            filter === "rated" ? "rating" : filter === "trending" ? "added" : ""
          }&key=${API_KEY}`
        );
        const data = await res.json();
        dispatch({ type: "rankedGamesListSet", payload: data.results });
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchRanking();
  }, [dateFrom, dateTo, API_KEY, filter, setToDoubleDigit]);

  function checkForSearch() {
    const getSet =
      searchParams.get("set") === "day" ||
      searchParams.get("set") === "month" ||
      searchParams.get("set") === "year";

    const getDate =
      searchParams.get("date") === "from" || searchParams.get("date") == "to";

    if (getSet && getDate) return true;
    return false;
  }

  return (
    <RankingContext.Provider value={{ ...state, dispatch, checkForSearch }}>
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

export { RankingProvider, useRanking };
