"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";

import { useSearchParams } from "next/navigation";
import { API_KEY } from "@/utils/data";

const SearchContext = createContext();

const possibleDestinatios = ["genres", "platforms", "developers"];

const initialState = {
  searchList: [],
  searchQuery: "",
  isLoading: false,
  currentPage: 1,
  gameCount: 0,
  orderBy: "relevance",
  inSingleItemLayout: false,
  searchingBy: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "querySet":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "gameListSet":
      return {
        ...state,
        searchList: action.payload,
      };
    case "gameListClear":
      return {
        ...state,
        searchList: 0,
      };
    case "gameCountSet":
      return {
        ...state,
        gameCount: action.payload,
      };
    case "loadingStarted":
      return {
        ...state,
        isLoading: true,
      };
    case "loadingFinished":
      return {
        ...state,
        isLoading: false,
      };
    case "singleItemLayoutSet":
      return {
        ...state,
        inSingleItemLayout: true,
      };
    case "singleItemLayoutUnset":
      return {
        ...state,
        inSingleItemLayout: false,
      };
    case "pageForward":
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case "pageBack":
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case "setOrder":
      return {
        ...state,
        orderBy: action.payload,
      };
    case "searchBy":
      return {
        ...state,
        searchingBy: true,
      };
    case "stopSearchBy":
      return {
        ...state,
        searchingBy: false,
      };

    default:
      throw new Error("Unknown Action");
  }
}

function SearchProvider({ children }) {
  const params = useSearchParams();

  const [state, dispatch] = useReducer(reducer, initialState);
  const abortControllerRef = useRef(null);

  const { currentPage, gameCount, orderBy, inSingleItemLayout, searchQuery } =
    state;

  // --------------------------------------------------
  // Fetching The Games That Match The Search Query
  // --------------------------------------------------

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    function checkForParams() {
      for (const key of params.keys()) {
        if (possibleDestinatios.includes(key)) {
          return key;
        }
      }
      return false;
    }

    async function fetchSearchList() {
      try {
        const key = checkForParams();
        if (key) dispatch({ type: "searchBy" });
        else dispatch({ type: "stopSearchBy" });
        dispatch({ type: "loadingStarted" });
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}${
            key ? `&${key}=${params.get(key)}` : ""
          }${
            orderBy !== "relevance"
              ? orderBy === "popularity"
                ? "&ordering=-added"
                : `&ordering=-${orderBy}`
              : ""
          }&page=${currentPage}&search=${searchQuery
            .toLowerCase()
            .replaceAll(" ", "+")}`,
          { signal: abortControllerRef.current.signal }
        );

        const data = await res.json();
        console.log(data);
        dispatch({ type: "gameListSet", payload: data.results });
        dispatch({ type: "gameCountSet", payload: data.count });
      } catch (error) {
        console.error(error.message);
      } finally {
        dispatch({ type: "loadingFinished" });
      }
    }

    if (searchQuery.length < 3 && !checkForParams()) return;

    fetchSearchList();
  }, [searchQuery, currentPage, orderBy, dispatch, params]);

  // ---------------------------------------------------
  // Changing The Layout Style At a Specific Width
  // ---------------------------------------------------

  useEffect(() => {
    function setLayout() {
      if (inSingleItemLayout || window.innerWidth > 768) return;
      dispatch({ type: "singleItemLayoutSet" });
    }

    window.addEventListener("resize", setLayout);

    function dispatchEffect() {
      window.removeEventListener("resize", setLayout);
    }

    return dispatchEffect;
  }, [inSingleItemLayout, dispatch]);

  function setQuery(query) {
    dispatch({ type: "querySet", payload: query });
  }

  function setSingleItemLayout() {
    dispatch({ type: "singleItemLayoutSet" });
  }

  function unSetSingleItemLayout() {
    dispatch({ type: "singleItemLayoutUnset" });
  }

  function goNext() {
    if (currentPage * 20 > gameCount) return;
    dispatch({ type: "pageForward" });
  }

  function goPrev() {
    if (currentPage === 1) return;
    dispatch({ type: "pageBack" });
  }

  function setOrder(order) {
    dispatch({ type: "setOrder", payload: order });
  }

  return (
    <SearchContext.Provider
      value={{
        ...state,
        dispatch,
        setQuery,
        setSingleItemLayout,
        unSetSingleItemLayout,
        goNext,
        goPrev,
        setOrder,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const value = useContext(SearchContext);
  if (value === undefined)
    throw new Error("Search context was used outside of a provider");

  return value;
}

export { SearchProvider, useSearch };
