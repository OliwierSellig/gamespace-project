import { Outlet } from "react-router-dom";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import UserNavigation from "../components/user/UserNavigation";

function User() {
  return (
    <>
      <Header />
      <UserNavigation>
        <Outlet />
      </UserNavigation>
      <Footer />
    </>
  );
}

export default User;
