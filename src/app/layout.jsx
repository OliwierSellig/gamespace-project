import { poppins } from "@/utils/fonts";
import "../scss/general.scss";
import { UserProvider } from "@/contexts/UserContext";

export const metadata = {
  title: "GameSpace | Web's most advanced games library",
  description:
    "Internet's most advanced game library to date. Find the game you are looking for and get all the most important infomation about in in just few click!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
