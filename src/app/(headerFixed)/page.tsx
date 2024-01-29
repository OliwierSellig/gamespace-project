import Home from "../../components/home/Home";

export default function page() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Home />
    </>
  );
}
