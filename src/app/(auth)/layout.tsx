"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ChildrenProp } from "../../utils/types/types";
import GameBackgroundLayout from "../../components/global/gameBackgroundLayout/GameBackgroundLayout";
import LoaderWindow from "../../components/global/loading/loaderWindow/LoaderWindow";
import backgroundImage from "../../../public/img/user-background.jpg";
import { useAuth } from "../../contexts/AuthContext";

function Layout({ children }: ChildrenProp) {
  const { isUserLoggedIn, isLoading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isUserLoggedIn) router.push("/user/overview");
  }, [isUserLoggedIn, router]);

  if (isLoading) return <LoaderWindow />;

  if (isUserLoggedIn) return null;
  return (
    <GameBackgroundLayout image={backgroundImage}>
      {children}
    </GameBackgroundLayout>
  );
}

export default Layout;
