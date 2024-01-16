import Reviews from "@/components/user/reviews/Reviews";

function layout({ children }) {
  return (
    <>
      <Reviews />
      {children}
    </>
  );
}

export default layout;
