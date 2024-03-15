"use client";

import { createContext, useContext, useEffect, useReducer } from "react";
import {
  BasicItemType,
  ChildrenProp,
  CollectionItemType,
  CollectionPropsType,
  LibraryItemType,
  ReviewType,
} from "../utils/types";
import toast from "react-hot-toast";
import { rankList } from "../utils/functions";

const UserContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  state: stateProps;
  genreList: { item: string; amount: number }[];
  devList: { item: string; amount: number }[];
  recentAddedGames: LibraryItemType[];
  favouritesList: LibraryItemType[];
  checkInLibrary: (id: number) => boolean;
  addToLibrary: (game: LibraryItemType) => void;
  removeFromLibrary: (id: number) => void;
  checkInWishlist: (id: number) => boolean;
  addToWishlist: (game: BasicItemType) => void;
  removeFromWishlist: (id: number) => void;
  updateReviews: (newReview: ReviewType) => void;
  findInReviews: (id: number) => ReviewType;
  removeFromReviews: (id: number) => void;
  sortReviews: (sortBy: string) => ReviewType[];
  addToCollections: (newCollection: CollectionPropsType) => number;
  removeFromCollections: (id: number) => void;
  findCollection: (id: number) => CollectionItemType;
  updateCollection: (
    action:
      | {
          type: "updateTitle" | "updateDescription";
          content: string;
        }
      | {
          type: "removeGame";
          gameID: number;
        }
      | {
          type: "addGame";
          game: BasicItemType;
        },
    collectionID: number
  ) => void;
  checkGameInCollection: (gameID: number, collectionID: number) => boolean;
  getLatestReviews: () => ReviewType[];
  getCommonYearList: () => {
    year: number;
    games: LibraryItemType[];
  }[];
  updateFavourite: (id: number, action: "add" | "remove") => void;
  checkIsFavourite: (id: number) => boolean;
  sortGames: (
    list:
      | { type: "library" }
      | { type: "wishlist" }
      | { type: "collections"; id: number },
    sortBy: string
  ) => BasicItemType[];
  filterLibraryBy: (type: string) => {
    name: string;
    games: LibraryItemType[];
  }[];
};

type stateProps = {
  library: LibraryItemType[];
  wishlist: BasicItemType[];
  reviews: ReviewType[];
  collections: CollectionItemType[];
  initialRender: boolean;
};

const enum REDUCER_ACTION_TYPE {
  SET_LIBRARY,
  SET_WISHLIST,
  SET_REVIEWS,
  SET_COLLECTIONS,
  SET_INITIAL_RENDER,
}

type ReducerAction =
  | {
      type: REDUCER_ACTION_TYPE.SET_LIBRARY;
      payload: LibraryItemType[];
    }
  | { type: REDUCER_ACTION_TYPE.SET_WISHLIST; payload: BasicItemType[] }
  | { type: REDUCER_ACTION_TYPE.SET_REVIEWS; payload: ReviewType[] }
  | { type: REDUCER_ACTION_TYPE.SET_COLLECTIONS; payload: CollectionItemType[] }
  | { type: REDUCER_ACTION_TYPE.SET_INITIAL_RENDER };

const initialState: stateProps = {
  library: [],
  wishlist: [],
  reviews: [],
  collections: [],
  initialRender: true,
};

function reducer(state: stateProps, action: ReducerAction): stateProps {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_LIBRARY:
      return { ...state, library: action.payload };
    case REDUCER_ACTION_TYPE.SET_WISHLIST:
      return { ...state, wishlist: action.payload };
    case REDUCER_ACTION_TYPE.SET_REVIEWS:
      return { ...state, reviews: action.payload };
    case REDUCER_ACTION_TYPE.SET_COLLECTIONS:
      return { ...state, collections: action.payload };
    case REDUCER_ACTION_TYPE.SET_INITIAL_RENDER:
      return { ...state, initialRender: false };
    default:
      throw new Error("Undefined reducer action");
  }
}

function UserProvider({ children }: ChildrenProp) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { library, wishlist, reviews, collections, initialRender } = state;

  const devList = rankList(
    library
      .filter((game) => game.developers.length)
      .map((game) => game.developers.at(0).name)
  );

  const genreList = rankList(
    library
      .filter((game) => game.genres.length)
      .map((game) => game.genres.at(0).name)
  );

  const recentAddedGames = [...library]
    .sort(
      (a, b) =>
        new Date(b.addedToLibraryDate).getTime() -
        new Date(a.addedToLibraryDate).getTime()
    )
    .slice(0, 9);

  const favouritesList = library.filter((game) => game.isFavourite);

  // ---------- Getting Data From Local Storage ---------------------------

  useEffect(() => {
    if (localStorage.getItem("library"))
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_LIBRARY,
        payload: JSON.parse(localStorage.getItem("library") || ""),
      });
    if (localStorage.getItem("wishlist"))
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_WISHLIST,
        payload: JSON.parse(localStorage.getItem("wishlist") || ""),
      });
    if (localStorage.getItem("reviews"))
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_REVIEWS,
        payload: JSON.parse(localStorage.getItem("reviews") || ""),
      });
    if (localStorage.getItem("collections"))
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_COLLECTIONS,
        payload: JSON.parse(localStorage.getItem("collections") || ""),
      });

    dispatch({ type: REDUCER_ACTION_TYPE.SET_INITIAL_RENDER });
  }, []);

  // --------------------------------------------

  // ---------- Saving Data To Local Storage ---------------------------

  useEffect(() => {
    if (!initialRender)
      localStorage.setItem("library", JSON.stringify(library));
  }, [library, initialRender]);

  useEffect(() => {
    if (!initialRender)
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist, initialRender]);

  useEffect(() => {
    if (!initialRender)
      localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews, initialRender]);

  useEffect(() => {
    if (!initialRender)
      localStorage.setItem("collections", JSON.stringify(collections));
  }, [collections, initialRender]);

  // --------------------------------------------
  function checkInLibrary(id: number) {
    return library.map((game) => game.id).includes(id);
  }

  function addToLibrary(game: LibraryItemType) {
    if (checkInLibrary(game.id)) {
      toast.error("You already have this game in library");
      return;
    }
    const newList = [...library, game];
    if (checkInWishlist(game.id)) removeFromWishlist(game.id);
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LIBRARY, payload: newList });
    toast.success("Successfully added to library");
  }

  function removeFromLibrary(id: number) {
    if (!checkInLibrary(id)) {
      toast.error("You don't have this game in your library");
      return;
    }
    const newList = library.filter((game) => game.id !== id);
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LIBRARY, payload: newList });
    toast.success("Successfully removed game from library");
  }

  function checkInWishlist(id: number) {
    return wishlist.map((game) => game.id).includes(id);
  }

  function addToWishlist(game: BasicItemType) {
    if (checkInWishlist(game.id)) {
      toast.error("You already have this game in wishlist");
      return;
    }
    const newList = [...wishlist, game];
    dispatch({ type: REDUCER_ACTION_TYPE.SET_WISHLIST, payload: newList });
    toast.success("Successfully added game to wishlist");
  }

  function removeFromWishlist(id: number) {
    if (!checkInWishlist(id)) {
      toast.error("You don't have this game in your wishlist");

      return;
    }
    const newList = wishlist.filter((game) => game.id !== id);
    dispatch({ type: REDUCER_ACTION_TYPE.SET_WISHLIST, payload: newList });
    toast.success("Successfully removed game from wishlist");
  }

  function getCommonYearList() {
    const uniqueList = [
      ...new Set(library.map((game) => new Date(game.released).getFullYear())),
    ];
    const topList = uniqueList.map((year) => {
      return {
        year,
        games: library.filter(
          (game) => new Date(game.released).getFullYear() === year
        ),
      };
    });
    return topList.sort((a, b) => b.year - a.year);
  }

  function updateFavourite(id: number, action: "add" | "remove") {
    const selectedGame = library.find((game) => game.id === id);
    if (!selectedGame) {
      toast.error("Couldn't add game to favourites");
      return;
    }
    const updatedGame = { ...selectedGame, isFavourite: action === "add" };
    const filteredList = library.filter((game) => game.id !== id);
    const newList = [...filteredList, updatedGame];
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LIBRARY, payload: newList });
    toast.success(
      `Successfully ${
        action === "add" ? "added game to " : "removed game from "
      } favourites`
    );
  }

  function checkIsFavourite(id: number) {
    const selectedGame = library.find((game) => game.id === id);

    if (!selectedGame) return false;

    return selectedGame ? selectedGame.isFavourite : false;
  }

  function sortGames(
    list:
      | { type: "library" }
      | { type: "wishlist" }
      | { type: "collections"; id: number },
    sortBy: string
  ) {
    const sortList =
      list.type === "wishlist"
        ? [...wishlist]
        : list.type === "library"
        ? [...library]
        : [...findCollection(list.id).games];

    switch (sortBy) {
      case "popularity":
        return sortList.sort((a, b) => b.added - a.added);
      case "release-date":
        return sortList.sort(
          (a, b) =>
            new Date(b.released).getTime() - new Date(a.released).getTime()
        );
      case "rating":
        return sortList.sort((a, b) => b.rating - a.rating);
      default:
        return sortList;
    }
  }

  function filterLibraryBy(type: string) {
    switch (type) {
      case "year": {
        const uniqueList = [
          ...new Set(
            library.map((game) =>
              new Date(game.released).getFullYear().toString()
            )
          ),
        ];

        const topList = uniqueList.map((year) => {
          return {
            name: year,
            games: library.filter(
              (game) => new Date(game.released).getFullYear() === parseInt(year)
            ),
          };
        });

        return topList.sort((a, b) => parseInt(b.name) - parseInt(a.name));
      }
      case "developer": {
        const uniqueList = [
          ...new Set(
            library
              .filter((game) => game.developers && game.developers.length > 0)
              .map((game) => game.developers.at(0).name)
          ),
        ];
        const topList = uniqueList.map((developer) => {
          return {
            name: developer,
            games: library.filter(
              (game) => game.developers?.at(0)?.name === developer
            ),
          };
        });

        return topList;
      }
      case "genre": {
        const uniqueList = [
          ...new Set(
            library
              .filter((game) => game.genres && game.genres.length > 0)
              .map((game) => game.genres.at(0).name)
          ),
        ];

        const topList = uniqueList.map((genre) => {
          return {
            name: genre,
            games: library.filter((game) => game.genres?.at(0)?.name === genre),
          };
        });
        return topList;
      }
      case "platform": {
        const uniqueList = [
          ...new Set(
            library
              .filter((game) => game.platforms && game.platforms.length > 0)
              .map((game) => game.platforms.at(0).platform.name)
          ),
        ];

        const topList = uniqueList.map((platform) => {
          return {
            name: platform,
            games: library.filter((game) =>
              game.platforms
                .map((platform) => platform.platform.name)
                .includes(platform)
            ),
          };
        });

        return topList;
      }
      default:
        return [];
    }
  }

  function findInReviews(id: number) {
    return reviews.find((review) => review.game.id === id);
  }

  function updateReviews(newReview: ReviewType) {
    const filteredList = findInReviews(newReview.game.id)
      ? reviews.filter((review) => review.game.id !== newReview.game.id)
      : [...reviews];
    const newList = [...filteredList, newReview];
    dispatch({ type: REDUCER_ACTION_TYPE.SET_REVIEWS, payload: newList });
    toast.success("Successfully updated reviews");
  }

  function removeFromReviews(id: number) {
    if (!findInReviews(id)) return;
    const filteredList = reviews.filter((review) => review.game.id !== id);
    dispatch({ type: REDUCER_ACTION_TYPE.SET_REVIEWS, payload: filteredList });
    toast.success("Successfully removed game from reviews");
  }

  function sortReviews(sortBy: string) {
    const sortList = [...reviews];

    switch (sortBy) {
      case "relevance":
        return sortList.sort(
          (a, b) =>
            new Date(b.editDate).getTime() - new Date(a.editDate).getTime()
        );
      case "rating":
        return sortList.sort((a, b) => b.rating - a.rating);
      case "game-title":
        return sortList.sort((a, b) => {
          if (a.game.name < b.game.name) {
            return -1;
          }
          if (a.game.name > b.game.name) {
            return 1;
          }
        });
      default:
        return sortList;
    }
  }

  function getLatestReviews() {
    return [...reviews]
      .sort(
        (a, b) =>
          new Date(b.editDate).getTime() - new Date(a.editDate).getTime()
      )
      .slice(0, 2);
  }

  function findCollection(id: number) {
    return collections.find((collection) => collection.id === id);
  }

  function addToCollections(newCollection: CollectionPropsType) {
    const randomID = Math.ceil(Math.random() * 10000);
    if (findCollection(randomID)) {
      toast.error("Collection with that ID already exists.");
      return;
    }
    const newList = [...collections, { ...newCollection, id: randomID }];
    dispatch({ type: REDUCER_ACTION_TYPE.SET_COLLECTIONS, payload: newList });
    toast.success("Collection created succesfully");
    return randomID;
  }

  function removeFromCollections(id: number) {
    if (!findCollection(id)) {
      toast.error("There is no collection with that ID");
      return;
    }
    const filteredList = collections.filter(
      (collection) => collection.id !== id
    );
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_COLLECTIONS,
      payload: filteredList,
    });
    toast.success("Collection removed succesfully");
  }

  function updateCollection(
    action:
      | { type: "updateTitle" | "updateDescription"; content: string }
      | { type: "removeGame"; gameID: number }
      | { type: "addGame"; game: BasicItemType },
    collectionID: number
  ) {
    const targetCollection = findCollection(collectionID);
    if (!targetCollection) {
      toast.error("There is no collection with that ID");
      return;
    }

    const filteredCollections = collections.filter(
      (collection) => collection.id !== collectionID
    );

    function setUpdatedCollection() {
      switch (action.type) {
        case "updateTitle":
          return { ...targetCollection, title: action.content };
        case "updateDescription":
          return { ...targetCollection, description: action.content };
        case "removeGame":
          return {
            ...targetCollection,
            games: targetCollection.games.filter(
              (game) => game.id !== action.gameID
            ),
          };
        case "addGame":
          if (
            targetCollection.games.find((game) => game.id === action.game.id)
          ) {
            toast.error("This collection already have such game.");
            return;
          }
          return {
            ...targetCollection,
            games: [...targetCollection.games, action.game],
          };
      }
    }

    const updatedCollection = setUpdatedCollection();

    console.log(updatedCollection);

    const newList = [...filteredCollections, updatedCollection];

    dispatch({ type: REDUCER_ACTION_TYPE.SET_COLLECTIONS, payload: newList });
    toast.success("Collection modified successfully");
  }

  function checkGameInCollection(gameID: number, collectionID: number) {
    const targetCollection = findCollection(collectionID);
    if (!targetCollection) return false;
    return Boolean(targetCollection.games.find((game) => game.id === gameID));
  }

  console.log(state);

  return (
    <UserContext.Provider
      value={{
        state,
        genreList,
        devList,
        recentAddedGames,
        favouritesList,
        checkInLibrary,
        addToLibrary,
        removeFromLibrary,
        checkInWishlist,
        addToWishlist,
        removeFromWishlist,
        updateReviews,
        findInReviews,
        removeFromReviews,
        sortReviews,
        addToCollections,
        removeFromCollections,
        findCollection,
        updateCollection,
        checkGameInCollection,
        getLatestReviews,
        getCommonYearList,
        updateFavourite,
        checkIsFavourite,
        sortGames,
        filterLibraryBy,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const value = useContext(UserContext);
  if (value === undefined)
    throw new Error("User context was used outside of a provider");
  return value;
}

export { useUser, UserProvider };
