import Developers from "../../../components/browse/Developers";

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return <Developers params={searchParams} />;
}

export default page;
