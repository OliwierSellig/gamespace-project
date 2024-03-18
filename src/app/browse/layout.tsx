import BrowseLayout from "../../components/browse/layout/BrowseLayout";

export const metadata = {
  description:
    "Explore gaming diversity on GameSpace's browse page. Dive into titles by platform, genre, or developer. Discover your next gaming adventure with ease.",
};

function layout({ children }) {
  return <BrowseLayout>{children}</BrowseLayout>;
}

export default layout;
