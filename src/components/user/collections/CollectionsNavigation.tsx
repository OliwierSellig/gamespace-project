import { Dispatch, SetStateAction } from "react";
import UserGamesListNav from "../locale/userGamesListNav/UserGamesListNav";
import UserSearchInput from "../locale/userSearchInput/UserSearchInput";
import StartCollectionButton from "./startCollection/StartCollectionButton";

type CollectionsNavigationProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

function CollectionsNavigation({
  query,
  setQuery,
}: CollectionsNavigationProps) {
  return (
    <UserGamesListNav>
      <StartCollectionButton />
      <UserSearchInput
        placeholder="Search Collections"
        inputValue={query}
        handleChange={(e) => setQuery(e)}
      />
    </UserGamesListNav>
  );
}

export default CollectionsNavigation;
