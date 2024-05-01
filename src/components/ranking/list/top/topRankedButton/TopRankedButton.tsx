import Link from "next/link";
import { ReactNode } from "react";
import { useUser } from "../../../../../contexts/UserContext";
import styles from "./topRankedButton.module.scss";

type TopRankedButtonProps = {
  children: ReactNode;
  isLoading: boolean;
  handleClick: () => Promise<void>;
  style?: "blue" | "white";
};

function TopRankedButton({
  children,
  isLoading,
  handleClick,
  style = "white",
}: TopRankedButtonProps) {
  const { isLoggedIn } = useUser();
  const className = `${styles.btn} ${styles[`btn__${style}`]} ${isLoading ? styles.btn__loading : ""}`;
  if (!isLoggedIn && style === "blue")
    return (
      <Link href="/login" className={className}>
        {children}
      </Link>
    );
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

export default TopRankedButton;
