import Platforms from "../../../components/browse/Platforms";

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return <Platforms params={searchParams} />;
}

export default page;
