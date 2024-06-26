import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { poppins } from "../utils/other/fonts";
import Providers from "../lib/QueryProvider";
import GlobalLayout from "../components/global/layout/globalLayout/GlobalLayout";
import "../scss/general.scss";

export const metadata = {
  title: {
    default: "GameSpace | Web's most advanced games library",
    template: "%s | GameSpace",
  },
  description:
    "Internet's most advanced game library to date. Find the game you are looking for and get all the most important infomation about in in just few click!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></Script>
      </head>
      <body className={poppins.className}>
        <Providers>
          <GlobalLayout>{children}</GlobalLayout>
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
              padding: "1.6rem 3.6rem",
              width: "max-content",
              maxWidth: "100%",
              backgroundColor: "var(--color-dark-300)",
              color: "var(--color-light-100)",
              boxShadow: "0rem 0.8rem 2.4rem 0rem rgba(0, 0, 0, 0.3)",
            },
          }}
        />
      </body>
    </html>
  );
}
