import { poppins } from "@/utils/fonts";
import "../scss/general.scss";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

export const metadata = {
  title: "GameSpace | Web's most advanced games library",
  description:
    "Internet's most advanced game library to date. Find the game you are looking for and get all the most important infomation about in in just few click!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
