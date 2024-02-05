import { poppins } from "../utils/fonts";
import "../scss/general.scss";
import { UserProvider } from "../contexts/UserContext";
import Providers from "../lib/QueryProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "GameSpace | Web's most advanced games library",
  description:
    "Internet's most advanced game library to date. Find the game you are looking for and get all the most important infomation about in in just few click!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Providers>
          <UserProvider>{children}</UserProvider>
        </Providers>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{}}
          toastOptions={{
            className: "toast",
            success: {
              duration: 3000,
              iconTheme: {
                primary: "var(--color-blue-200)",
                secondary: "var(--color-light-100)",
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: "var(--color-crimson-100)",
                secondary: "var(--color-light-100)",
              },
            },
            style: {
              fontSize: "1.6rem",
              fontFamily: poppins.style.fontFamily,
              // maxWidth: "500px",
              // widows: "70%",
              padding: "1.6rem 3.6rem",
              backgroundColor: "var(--color-dark-300)",
              color: "var(--color-light-100)",
              boxShadow: "0rem 0.8rem 2.4rem 0rem rgba(0, 0, 0, 0.3);",
            },
          }}
        />
      </body>
    </html>
  );
}
