import Genres from "../../../components/browse/genres/Genres";

export const metadata = {
  title: "Genres",
};

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return <Genres params={searchParams} />;
}

export default page;
