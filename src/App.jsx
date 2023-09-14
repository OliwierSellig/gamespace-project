import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
import User from "./pages/User";
import PageNotFound from "./pages/PageNotFound";
import Game from "./pages/Game";
import Browse from "./pages/Browse";
import Ranking from "./pages/Ranking";
import BrowseDevelopers from "./components/browse/BrowseDevelopers";
import BrowseGenres from "./components/browse/BrowseGenres";
import BrowsePlatforms from "./components/browse/BrowsePlatforms";
import RankingNav from "./components/ranking/RankingNav";
import SelectRated from "./components/ranking/SelectRated";
import Redirect from "./components/ranking/Redirect";
import { UtilityProvider } from "./contexts/UtilityContext";
import ScreenshotZoom from "./components/game/ScreenshotZoom";
import { SearchProvider } from "./contexts/SearchContext";
import UserOverview from "./components/user/overview/UserOverview";
import UserLibrary from "./components/user/library/UserLibrary";
import Wishlist from "./components/user/wishlist/Wishlist";
import { UserProvider } from "./contexts/UserContext";
import GameAdd from "./components/game/GameAdd";

function App() {
  return (
    <UtilityProvider>
      <BrowserRouter>
        <UserProvider>
          <SearchProvider>
            <Routes>
              <Route index element={<Home />} />
              <Route path="search" element={<Search />} />
              <Route path="user" element={<User />}>
                <Route path="overview" element={<UserOverview />} />
                <Route path="library" element={<UserLibrary />} />
                <Route path="wishlist" element={<Wishlist />} />
              </Route>
              <Route path="ranking" element={<Ranking />} />
              <Route path="ranking" element={<Ranking />}>
                <Route path="" element={<Redirect />} />
                <Route path=":filter" element={<RankingNav />}>
                  <Route path=":id" element={<SelectRated />} />
                </Route>
              </Route>
              <Route path="browse" element={<Browse />}>
                <Route path="developers" element={<BrowseDevelopers />} />
                <Route path="genres" element={<BrowseGenres />} />
                <Route path="platforms" element={<BrowsePlatforms />} />
              </Route>
              <Route path="games/:id" element={<Game />}>
                <Route path="add" element={<GameAdd />} />
                <Route path=":screenshot" element={<ScreenshotZoom />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </SearchProvider>
        </UserProvider>
      </BrowserRouter>
    </UtilityProvider>
  );
}

export default App;
