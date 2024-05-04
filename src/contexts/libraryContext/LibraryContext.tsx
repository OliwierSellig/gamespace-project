"use client";

import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { rankList } from "../../utils/functions/functions";
import {
  ActivityItem,
  ChildrenProp,
  LibraryItemType,
} from "../../utils/types/types";
import { fetchGameByID } from "../../lib/games";
import {
  removeDocumentFromFirestoreCollection,
  updateDocumentsInFirestoreCollections,
} from "../../firebase/userCollections";
import { useUser } from "../UserContext";
import { useActivities } from "../activitiesContext/ActivitiesContext";
import { useWishlist } from "../wishlistContext/WishlistContext";

const LibraryContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  getFavourites: () => LibraryItemType[];
  getFilteredList: (type?: "developers" | "genres") => {
    item: string;
    amount: number;
  }[];
  getRecentAddedGames: () => LibraryItemType[];
  filterLibraryBy: (type: string) => {
    name: string;
    games: LibraryItemType[];
  }[];
  getCommonYearList: () => {
    year: number;
    games: LibraryItemType[];
  }[];
  checkInLibrary: (id: number) => LibraryItemType;
  addToLibrary: (game: LibraryItemType) => Promise<void>;
  addGameFromRanking: (id: number) => Promise<void>;
  removeFromLibrary: (id: number) => Promise<void>;
  updateFavourite: (id: number, action: "add" | "remove") => Promise<void>;
  checkIsFavourite: (id: number) => boolean;
};
function LibraryProvider({ children }: ChildrenProp) {
  const { state, setCollection } = useUser();
  const { id, library } = state;
  const { removeFromWishlist, checkInWishlist } = useWishlist();
  const { addActivity } = useActivities();

  function getFilteredList(type: "developers" | "genres" = "developers") {
    return rankList(
      library
        .filter((game) => game[type].length)
        .map((game) => game[type].at(0).name),
    );
  }

  function getRecentAddedGames() {
    return [...library]
      .sort(
        (a, b) =>
          new Date(b.addedToLibraryDate).getTime() -
          new Date(a.addedToLibraryDate).getTime(),
      )
      .slice(0, 9);
  }

  function getFavourites() {
    return library.filter((game) => game.isFavourite);
  }

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
    await updateDocumentsInFirestoreCollections({
      collectionType: "library",
      userID: id,
      documentData: [game],
    });
    setCollection({ type: "library", value: newList });
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
    await removeDocumentFromFirestoreCollection({
      userID: state.id,
      documentID: id.toString(),
      collectionType: "library",
    });
    setCollection({ type: "library", value: newList });
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
    await updateDocumentsInFirestoreCollections({
      userID: state.id,
      collectionType: "library",
      documentData: [updatedGame],
    });
    setCollection({ type: "library", value: newList });
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

  return (
    <LibraryContext.Provider
      value={{
        getFavourites,
        getFilteredList,
        getRecentAddedGames,
        getCommonYearList,
        filterLibraryBy,
        checkInLibrary,
        addToLibrary,
        addGameFromRanking,
        removeFromLibrary,
        updateFavourite,
        checkIsFavourite,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

function useLibrary() {
  const value = useContext(LibraryContext);
  if (value === undefined)
    throw new Error("Library context was used outside of a provider");
  return value;
}

export { useLibrary, LibraryProvider };
