import Developers from "../../../components/browse/developers/Developers";

export const metadata = {
  title: "Developers",
};

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return <Developers params={searchParams} />;
}

export default page;
