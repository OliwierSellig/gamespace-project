"use client";

import { onAuthStateChanged } from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import toast from "react-hot-toast";
import { rankList } from "../utils/functions/functions";
import {
  ActivityItem,
  BasicItemType,
  ChildrenProp,
  CollectionItemType,
  CollectionPropsType,
  LibraryItemType,
  ReviewType,
} from "../utils/types/types";
import { fetchGameByID } from "../lib/games";
import { auth } from "../firebase/firebase";
import {
  addGameToUserFirestore,
  removeGameFromUserFirestore,
  toggleFavouriteFirebase,
} from "../firebase/library";
import { getFullUserData } from "../firebase/userData";
import {
  addGameToUserFirestoreWishlist,
  removeGameFromUserFirestoreWishlist,
} from "../firebase/wishlist";

const UserContext = createContext<ContextType | undefined>(undefined);

// ---------- Setting Context Type ---------------------------

type ContextType = {
  state: stateProps;
  isLoggedIn: boolean;
  isLoading: boolean;
  currentAvatar: string;
  currentBackground: string;
  genreList: { item: string; amount: number }[];
  devList: { item: string; amount: number }[];
  recentAddedGames: LibraryItemType[];
  favouritesList: LibraryItemType[];
  setUserProfile: (profileData: {
    name?: string;
    recentAvatars?: string[];
    recentBackgrounds?: string[];
  }) => void;
  setRegisterUserData: (props: {
    name: string;
    recentBackgrounds: string[];
    recentAvatars: string[];
    createdAt: string;
    id: string;
  }) => void;
  setSettings: (isOpen: boolean) => void;
  setLoggingOut: (loggintOut: boolean) => void;
  checkInLibrary: (id: number) => LibraryItemType;
  addToLibrary: (game: LibraryItemType) => Promise<void>;
  addGameFromRanking: (id: number) => Promise<void>;
  removeFromLibrary: (id: number) => Promise<void>;
  checkInWishlist: (id: number) => BasicItemType;
  addToWishlist: (game: BasicItemType) => Promise<void>;
  removeFromWishlist: (id: number) => Promise<void>;
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
          type: "updateDetails";
          content: {
            title: string;
            description: string;
          };
        }
      | {
          type: "addGame" | "removeGame";
          game: BasicItemType;
        },
    collectionID: number,
  ) => void;
  checkGameInCollection: (gameID: number, collectionID: number) => boolean;
  getLatestReviews: () => ReviewType[];
  getCommonYearList: () => {
    year: number;
    games: LibraryItemType[];
  }[];
  updateFavourite: (id: number, action: "add" | "remove") => Promise<void>;
  checkIsFavourite: (id: number) => boolean;
  sortGames: (
    list:
      | { type: "library" }
      | { type: "wishlist" }
      | { type: "collections"; id: number },
    sortBy: string,
  ) => BasicItemType[];
  filterLibraryBy: (type: string) => {
    name: string;
    games: LibraryItemType[];
  }[];
  transformActivityIntoString(activity: ActivityItem): (
    | string
    | {
        name: string;
        url: string;
      }
  )[];
  filterActivities: (filter: string) => ActivityItem[];
};

// ----------------------------------------------------------------

// ---------- Setting Types for Reducer && State ---------------------------

type stateProps = {
  profileSettings: {
    name: string;
    recentAvatars: string[];
    recentBackgrounds: string[];
    createdAt: string;
  };
  id: string;
  library: LibraryItemType[];
  wishlist: BasicItemType[];
  reviews: ReviewType[];
  collections: CollectionItemType[];
  activities: ActivityItem[];
  areSettingsOpen: boolean;
  isLogginOut: boolean;
};

const enum REDUCER_ACTION_TYPE {
  SET_USER_PROFILE,
  SET_ID,
  SET_LIBRARY,
  SET_WISHLIST,
  SET_REVIEWS,
  SET_COLLECTIONS,
  SET_ACTIVITIES,
  SET_INITIAL_RENDER,
  SET_SETTINGS_OPEN,
  SET_SETTINGS_CLOSE,
  SET_LOGGING_OPEN,
  SET_LOGGING_CLOSE,
  RESET_STATE,
}

type ReducerAction =
  | {
      type: REDUCER_ACTION_TYPE.SET_USER_PROFILE;
      payload: {
        name: string;
        recentAvatars: string[];
        recentBackgrounds: string[];
        createdAt: string;
      };
    }
  | { type: REDUCER_ACTION_TYPE.SET_ID; payload: string }
  | {
      type: REDUCER_ACTION_TYPE.SET_LIBRARY;
      payload: LibraryItemType[];
    }
  | { type: REDUCER_ACTION_TYPE.SET_WISHLIST; payload: BasicItemType[] }
  | { type: REDUCER_ACTION_TYPE.SET_REVIEWS; payload: ReviewType[] }
  | { type: REDUCER_ACTION_TYPE.SET_COLLECTIONS; payload: CollectionItemType[] }
  | { type: REDUCER_ACTION_TYPE.SET_ACTIVITIES; payload: ActivityItem[] }
  | {
      type:
        | REDUCER_ACTION_TYPE.SET_INITIAL_RENDER
        | REDUCER_ACTION_TYPE.SET_SETTINGS_CLOSE
        | REDUCER_ACTION_TYPE.SET_SETTINGS_OPEN
        | REDUCER_ACTION_TYPE.SET_LOGGING_CLOSE
        | REDUCER_ACTION_TYPE.SET_LOGGING_OPEN
        | REDUCER_ACTION_TYPE.RESET_STATE;
    };

// ----------------------------------------------------------------

// ---------- Setting Initial Values for Reducer && State ---------------------------

const initialState: stateProps = {
  profileSettings: {
    name: "",
    createdAt: "",
    recentAvatars: [],
    recentBackgrounds: [],
  },
  id: null,
  library: [],
  wishlist: [],
  reviews: [],
  collections: [],
  activities: [],
  areSettingsOpen: false,
  isLogginOut: false,
};

function reducer(state: stateProps, action: ReducerAction): stateProps {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_USER_PROFILE:
      return {
        ...state,
        profileSettings: action.payload,
      };
    case REDUCER_ACTION_TYPE.SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    case REDUCER_ACTION_TYPE.SET_LIBRARY:
      return { ...state, library: action.payload };
    case REDUCER_ACTION_TYPE.SET_WISHLIST:
      return { ...state, wishlist: action.payload };
    case REDUCER_ACTION_TYPE.SET_REVIEWS:
      return { ...state, reviews: action.payload };
    case REDUCER_ACTION_TYPE.SET_COLLECTIONS:
      return { ...state, collections: action.payload };
    case REDUCER_ACTION_TYPE.SET_ACTIVITIES:
      return { ...state, activities: action.payload };
    case REDUCER_ACTION_TYPE.SET_SETTINGS_OPEN:
      return { ...state, areSettingsOpen: true };
    case REDUCER_ACTION_TYPE.SET_SETTINGS_CLOSE:
      return { ...state, areSettingsOpen: false };
    case REDUCER_ACTION_TYPE.SET_LOGGING_OPEN:
      return { ...state, isLogginOut: true };
    case REDUCER_ACTION_TYPE.SET_LOGGING_CLOSE:
      return { ...state, isLogginOut: false };
    case REDUCER_ACTION_TYPE.RESET_STATE:
      return { ...initialState };

    default:
      throw new Error("Undefined reducer action");
  }
}

// ----------------------------------------------------------------

function UserProvider({ children }: ChildrenProp) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    profileSettings,
    id,
    library,
    wishlist,
    reviews,
    collections,
    activities,
  } = state;

  const currentAvatar = profileSettings.recentAvatars.at(0);
  const currentBackground = profileSettings.recentBackgrounds.at(0);

  const devList = rankList(
    library
      .filter((game) => game.developers.length)
      .map((game) => game.developers.at(0).name),
  );

  const genreList = rankList(
    library
      .filter((game) => game.genres.length)
      .map((game) => game.genres.at(0).name),
  );

  const recentAddedGames = [...library]
    .sort(
      (a, b) =>
        new Date(b.addedToLibraryDate).getTime() -
        new Date(a.addedToLibraryDate).getTime(),
    )
    .slice(0, 9);

  const favouritesList = library.filter((game) => game.isFavourite);

  // -------------------------------------------------------------------------------

  function setUserProfile(profileData: {
    name?: string;
    recentAvatars?: string[];
    recentBackgrounds?: string[];
  }) {
    const name = profileData.name || state.profileSettings.name;
    const recentAvatars =
      profileData.recentAvatars || state.profileSettings.recentAvatars;
    const recentBackgrounds =
      profileData.recentBackgrounds || state.profileSettings.recentBackgrounds;

    const updatedUserProfile = {
      name,
      recentAvatars,
      recentBackgrounds,
      createdAt: state.profileSettings.createdAt,
    };

    dispatch({
      type: REDUCER_ACTION_TYPE.SET_USER_PROFILE,
      payload: updatedUserProfile,
    });
  }

  console.log(state);

  async function initialRender(user: { uid: string }) {
    if (user) {
      const userData = await getFullUserData(user.uid);
      console.log(userData);
      if (userData) {
        dispatch({
          type: REDUCER_ACTION_TYPE.SET_USER_PROFILE,
          payload: {
            name: userData.profileSettings.gamespaceName,
            recentAvatars: userData.profileSettings.recentAvatars,
            recentBackgrounds: userData.profileSettings.recentBackgrounds,
            createdAt: userData.profileSettings.createdAt,
          },
        });
        dispatch({ type: REDUCER_ACTION_TYPE.SET_ID, payload: user.uid });
        dispatch({
          type: REDUCER_ACTION_TYPE.SET_LIBRARY,
          payload: userData.library,
        });
        setIsLoggedIn(true);
      }
    } else {
      dispatch({ type: REDUCER_ACTION_TYPE.RESET_STATE });
      setIsLoggedIn(false);
    }
    setIsLoading(false);
  }

  function setRegisterUserData(props: {
    name: string;
    recentAvatars: string[];
    recentBackgrounds: string[];
    createdAt: string;
    id: string;
  }) {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_USER_PROFILE,
      payload: {
        name: props.name,
        recentAvatars: props.recentAvatars,
        recentBackgrounds: props.recentBackgrounds,
        createdAt: props.createdAt,
      },
    });
    dispatch({ type: REDUCER_ACTION_TYPE.SET_ID, payload: props.id });
    setIsLoggedIn(true);
  }

  // -------------------------------------------------------------------------------

  // ------ Manipulating Library Data -----------

  function checkInLibrary(id: number) {
    return library.find((game) => game.id === id);
  }

  async function addToLibrary(game: LibraryItemType) {
    if (checkInLibrary(game.id)) {
      toast.error("You already have this game in library");
      return;
    }
    const newList = [...library, game];
    if (checkInWishlist(game.id)) removeFromWishlist(game.id);
    await addGameToUserFirestore({ id, game });
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LIBRARY, payload: newList });
    const activitiesList: ActivityItem[] = checkInWishlist(game.id)
      ? [
          {
            date: new Date(),
            action: {
              type: "removeFromWishlist",
              item: { name: game.name, id: game.id },
            },
          },
          {
            date: new Date(),
            action: {
              type: "addToLibrary",
              item: { name: game.name, id: game.id },
            },
          },
        ]
      : [
          {
            date: new Date(),
            action: {
              type: "addToLibrary",
              item: { name: game.name, id: game.id },
            },
          },
        ];

    addActivity(activitiesList);
    toast.success("Successfully added to library");
  }

  async function addGameFromRanking(id: number) {
    const fetchedGame = await fetchGameByID(id);
    addToLibrary({
      name: fetchedGame.name,
      cover: fetchedGame.background_image,
      slug: fetchedGame.slug,
      id: fetchedGame.id,
      addedToLibraryDate: new Date(),
      developers: fetchedGame.developers,
      genres: fetchedGame.genres,
      platforms: fetchedGame.platforms,
      released: fetchedGame.released,
      added: fetchedGame.added,
      rating: fetchedGame.rating,
      isFavourite: false,
    });
  }

  async function removeFromLibrary(id: number) {
    const targetGame = checkInLibrary(id);
    if (!targetGame) {
      toast.error("You don't have this game in your library");
      return;
    }
    const newList = library.filter((game) => game.id !== id);
    await removeGameFromUserFirestore({
      userID: state.id,
      gameID: id.toString(),
    });
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LIBRARY, payload: newList });
    const activitiesList: ActivityItem[] = checkIsFavourite(id)
      ? [
          {
            date: new Date(),
            action: {
              type: "removeFromFavourites",
              item: { name: targetGame.name, id: targetGame.id },
            },
          },
          {
            date: new Date(),
            action: {
              type: "removeFromLibrary",
              item: { name: targetGame.name, id: targetGame.id },
            },
          },
        ]
      : [
          {
            date: new Date(),
            action: {
              type: "removeFromLibrary",
              item: { name: targetGame.name, id: targetGame.id },
            },
          },
        ];

    addActivity(activitiesList);
    toast.success("Successfully removed game from library");
  }

  // --------------------------------------------

  // ------- Manipulating Wishlist Data ---------

  function checkInWishlist(id: number) {
    return wishlist.find((game) => game.id === id);
  }

  async function addToWishlist(game: BasicItemType) {
    if (checkInWishlist(game.id)) {
      toast.error("You already have this game in wishlist");
      return;
    }
    const newList = [...wishlist, game];
    await addGameToUserFirestoreWishlist({ id, game });
    dispatch({ type: REDUCER_ACTION_TYPE.SET_WISHLIST, payload: newList });
    addActivity([
      {
        date: new Date(),
        action: {
          type: "addToWishlist",
          item: { name: game.name, id: game.id },
        },
      },
    ]);
    toast.success("Successfully added game to wishlist");
  }

  async function removeFromWishlist(id: number) {
    const targetGame = checkInWishlist(id);

    if (!targetGame) {
      toast.error("You don't have this game in your wishlist");

      return;
    }
    const newList = wishlist.filter((game) => game.id !== id);
    await removeGameFromUserFirestoreWishlist({
      gameID: id.toString(),
      userID: state.id,
    });
    dispatch({ type: REDUCER_ACTION_TYPE.SET_WISHLIST, payload: newList });
    addActivity([
      {
        date: new Date(),
        action: {
          type: "removeFromWishlist",
          item: { name: targetGame.name, id: targetGame.id },
        },
      },
    ]);
    toast.success("Successfully removed game from wishlist");
  }

  // --------------------------------------------

  // ------- Manipulating Favourites -----------

  async function updateFavourite(id: number, action: "add" | "remove") {
    const targetGame = checkInLibrary(id);
    if (!targetGame) {
      toast.error("Couldn't add game to favourites");
      return;
    }
    const updatedGame = { ...targetGame, isFavourite: action === "add" };
    const filteredList = library.filter((game) => game.id !== id);
    const newList = [...filteredList, updatedGame];
    await toggleFavouriteFirebase({
      userID: state.id,
      gameID: id.toString(),
      isFavourite: action === "add",
    });
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LIBRARY, payload: newList });
    addActivity([
      {
        date: new Date(),
        action: {
          type: action === "add" ? "addToFavourites" : "removeFromFavourites",
          item: { name: targetGame.name, id: targetGame.id },
        },
      },
    ]);
    toast.success(
      `Successfully ${
        action === "add" ? "added game to " : "removed game from "
      } favourites`,
    );
  }

  function checkIsFavourite(id: number) {
    const targetGame = checkInLibrary(id);

    if (!targetGame) return false;

    return targetGame ? targetGame.isFavourite : false;
  }

  // ---------------------------------------------

  // ------- Manipulating Reviews ----------------

  function findInReviews(id: number) {
    return reviews.find((review) => review.game.id === id);
  }

  function updateReviews(newReview: ReviewType) {
    const inReviews = Boolean(findInReviews(newReview.game.id));
    const filteredList = inReviews
      ? reviews.filter((review) => review.game.id !== newReview.game.id)
      : [...reviews];
    const newList = [...filteredList, newReview];
    dispatch({ type: REDUCER_ACTION_TYPE.SET_REVIEWS, payload: newList });
    addActivity([
      {
        date: new Date(),
        action: {
          type: inReviews ? "updateReview" : "publishReview",
          item: { name: newReview.game.name, id: newReview.game.id },
        },
      },
    ]);
    toast.success("Successfully updated reviews");
  }

  function removeFromReviews(id: number) {
    const targetReview = findInReviews(id);
    if (!targetReview) return;
    const filteredList = reviews.filter((review) => review.game.id !== id);
    dispatch({ type: REDUCER_ACTION_TYPE.SET_REVIEWS, payload: filteredList });
    addActivity([
      {
        date: new Date(),
        action: {
          type: "deleteReview",
          item: { name: targetReview.game.name, id: targetReview.game.id },
        },
      },
    ]);
    toast.success("Successfully removed game from reviews");
  }

  function sortReviews(sortBy: string) {
    const sortList = [...reviews];

    switch (sortBy) {
      case "relevance":
        return sortList.sort(
          (a, b) =>
            new Date(b.editDate).getTime() - new Date(a.editDate).getTime(),
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
          new Date(b.editDate).getTime() - new Date(a.editDate).getTime(),
      )
      .slice(0, 2);
  }

  // ---------------------------------------------

  // ------- Manipulating Collections -----------

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
    addActivity([
      {
        date: new Date(),
        action: {
          type: "startCollection",
          item: { name: newCollection.title, id: randomID },
        },
      },
    ]);
    toast.success("Collection created succesfully");
    return randomID;
  }

  function removeFromCollections(id: number) {
    const targetCollection = findCollection(id);

    if (!targetCollection) {
      toast.error("There is no collection with that ID");
      return;
    }
    const filteredList = collections.filter(
      (collection) => collection.id !== id,
    );
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_COLLECTIONS,
      payload: filteredList,
    });
    addActivity([
      {
        date: new Date(),
        action: {
          type: "deleteCollection",
          item: { name: targetCollection.title, id: targetCollection.id },
        },
      },
    ]);
    toast.success("Collection removed succesfully");
  }

  function updateCollection(
    action:
      | {
          type: "updateDetails";
          content: { title: string; description: string };
        }
      | { type: "addGame" | "removeGame"; game: BasicItemType },
    collectionID: number,
  ) {
    const targetCollection = findCollection(collectionID);
    if (!targetCollection) {
      toast.error("There is no collection with that ID");
      return;
    }

    const filteredCollections = collections.filter(
      (collection) => collection.id !== collectionID,
    );

    function setUpdatedCollection() {
      switch (action.type) {
        case "updateDetails": {
          addActivity([
            {
              date: new Date(),
              action: {
                type: "updateCollection",
                item: { name: targetCollection.title, id: targetCollection.id },
              },
            },
          ]);
          return {
            ...targetCollection,
            title: action.content.title,
            description: action.content.description,
          };
        }
        case "removeGame": {
          addActivity([
            {
              date: new Date(),
              action: {
                type: "removeGameFromCollection",
                item: {
                  collectionName: targetCollection.title,
                  collectionId: targetCollection.id,
                  gameName: action.game.name,
                  gameId: action.game.id,
                },
              },
            },
          ]);
          return {
            ...targetCollection,
            games: targetCollection.games.filter(
              (game) => game.id !== action.game.id,
            ),
          };
        }
        case "addGame": {
          if (
            targetCollection.games.find((game) => game.id === action.game.id)
          ) {
            toast.error("This collection already have such game.");
            return;
          }
          addActivity([
            {
              date: new Date(),
              action: {
                type: "addGameToCollection",
                item: {
                  collectionName: targetCollection.title,
                  collectionId: targetCollection.id,
                  gameName: action.game.name,
                  gameId: action.game.id,
                },
              },
            },
          ]);
          return {
            ...targetCollection,
            games: [...targetCollection.games, action.game],
          };
        }
      }
    }

    const updatedCollection = setUpdatedCollection();

    const newList = [...filteredCollections, updatedCollection];

    dispatch({ type: REDUCER_ACTION_TYPE.SET_COLLECTIONS, payload: newList });
    toast.success("Collection modified successfully");
  }

  function checkGameInCollection(gameID: number, collectionID: number) {
    const targetCollection = findCollection(collectionID);
    if (!targetCollection) return false;
    return Boolean(targetCollection.games.find((game) => game.id === gameID));
  }

  // ---------------------------------------------

  // ------- Manipulating Activities -------------

  function addActivity(newActivities: ActivityItem[]) {
    const newList = [...activities, ...newActivities];
    dispatch({ type: REDUCER_ACTION_TYPE.SET_ACTIVITIES, payload: newList });
  }

  function transformActivityIntoString(activity: ActivityItem) {
    switch (activity.action.type) {
      case "addToLibrary":
        return [
          "Added",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
          "to",
          { name: "Library", url: "/user/library" },
        ];
      case "removeFromLibrary":
        return [
          "Removed",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
          "from",
          { name: "Library", url: "/user/library" },
        ];
      case "addToFavourites":
        return [
          "Added",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
          "to",
          { name: "Favourites", url: "/user/overview" },
        ];
      case "removeFromFavourites":
        return [
          "Removed",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
          "from",
          { name: "Favourites", url: "/user/overview" },
        ];
      case "addToWishlist":
        return [
          "Added",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
          "to",
          { name: "Wishlist", url: "/user/wishlist" },
        ];
      case "removeFromWishlist":
        return [
          "Removed",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
          "from",
          { name: "Wishlist", url: "/user/wishlist" },
        ];
      case "publishReview":
        return [
          "Published review of",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}/review`,
          },
        ];
      case "deleteReview":
        return [
          "Deleted review of",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
        ];
      case "updateReview":
        return [
          "Updated review of",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}/review`,
          },
        ];
      case "startCollection":
        return [
          "Started collection called",
          {
            name: activity.action.item.name,
            url: `/collection/${activity.action.item.id}`,
          },
        ];
      case "deleteCollection":
        return [
          "Deleted collection called",
          {
            name: activity.action.item.name,
            url: `/collections/${activity.action.item.id}`,
          },
        ];
      case "updateCollection":
        return [
          "Updated collection called",
          {
            name: activity.action.item.name,
            url: `/collections/${activity.action.item.id}`,
          },
        ];
      case "addGameToCollection":
        return [
          "Added",
          {
            name: activity.action.item.gameName,
            url: `/games/${activity.action.item.gameId}`,
          },
          "to",
          {
            name: activity.action.item.collectionName,
            url: `/collections/${activity.action.item.collectionId}`,
          },
        ];
      case "removeGameFromCollection":
        return [
          "Removed",
          {
            name: activity.action.item.gameName,
            url: `/games/${activity.action.item.gameId}`,
          },
          "from",
          {
            name: activity.action.item.collectionName,
            url: `/collections/${activity.action.item.collectionId}`,
          },
        ];
      default:
        return [];
    }
  }

  function filterActivities(filter: string) {
    const activitiesList = [...activities];
    function getFilteredStrings() {
      switch (filter) {
        case "library": {
          return ["addToLibrary", "removeFromLibrary"];
        }
        case "wishlist": {
          return ["addToWishlist", "removeFromWishlist"];
        }
        case "favourites": {
          return ["addToFavourites", "removeFromFavourites"];
        }
        case "reviews": {
          return ["publishReview", "updateReview", "deleteReview"];
        }
        case "collections": {
          return ["startCollection", "updateCollection", "deleteCollection"];
        }
        default:
          return [];
      }
    }

    const filteredStrings = getFilteredStrings();

    const filteredList = !filteredStrings.length
      ? activitiesList
      : activitiesList.filter((activity) =>
          filteredStrings.includes(activity.action.type),
        );

    const sortedList = filteredList.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return sortedList;
  }

  // ---------------------------------------------

  // ------- Other -------------
  function setSettings(isOpen: boolean) {
    dispatch({
      type: isOpen
        ? REDUCER_ACTION_TYPE.SET_SETTINGS_OPEN
        : REDUCER_ACTION_TYPE.SET_SETTINGS_CLOSE,
    });
  }

  function setLoggingOut(loggingOut: boolean) {
    dispatch({
      type: loggingOut
        ? REDUCER_ACTION_TYPE.SET_LOGGING_OPEN
        : REDUCER_ACTION_TYPE.SET_LOGGING_CLOSE,
    });
  }

  function sortGames(
    list:
      | { type: "library" }
      | { type: "wishlist" }
      | { type: "collections"; id: number },
    sortBy: string,
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
            new Date(b.released).getTime() - new Date(a.released).getTime(),
        );
      case "rating":
        return sortList.sort((a, b) => b.rating - a.rating);
      default:
        return sortList;
    }
  }

  function filterLibraryBy(type: string) {
    switch (type) {
      case "year-of-release": {
        const uniqueList = [
          ...new Set(
            library.map((game) =>
              new Date(game.released).getFullYear().toString(),
            ),
          ),
        ];

        const topList = uniqueList.map((year) => {
          return {
            name: year,
            games: library.filter(
              (game) =>
                new Date(game.released).getFullYear() === parseInt(year),
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
              .map((game) => game.developers.at(0).name),
          ),
        ];
        const topList = uniqueList.map((developer) => {
          return {
            name: developer,
            games: library.filter(
              (game) => game.developers?.at(0)?.name === developer,
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
              .map((game) => game.genres.at(0).name),
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
              .map((game) => game.platforms.at(0).platform.name),
          ),
        ];

        const topList = uniqueList.map((platform) => {
          return {
            name: platform,
            games: library.filter((game) =>
              game.platforms
                .map((platform) => platform.platform.name)
                .includes(platform),
            ),
          };
        });

        return topList;
      }
      default:
        return [];
    }
  }

  function getCommonYearList() {
    const uniqueList = [
      ...new Set(library.map((game) => new Date(game.released).getFullYear())),
    ];
    const topList = uniqueList.map((year) => {
      return {
        year,
        games: library.filter(
          (game) => new Date(game.released).getFullYear() === year,
        ),
      };
    });
    return topList.sort((a, b) => b.year - a.year);
  }

  // ---------------------------------------------

  // --------- Initialize User ----------------------

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initialRender);

    return unsubscribe;
  }, []);

  // ---------------------------------------------

  return (
    <UserContext.Provider
      value={{
        state,
        isLoading,
        isLoggedIn,
        currentAvatar,
        currentBackground,
        genreList,
        devList,
        recentAddedGames,
        favouritesList,
        setSettings,
        setLoggingOut,
        checkInLibrary,
        addToLibrary,
        addGameFromRanking,
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
        transformActivityIntoString,
        filterActivities,
        setRegisterUserData,
        setUserProfile,
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
