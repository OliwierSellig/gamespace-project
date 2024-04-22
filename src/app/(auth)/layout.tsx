"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ChildrenProp } from "../../utils/types/types";
import GameBackgroundLayout from "../../components/global/gameBackgroundLayout/GameBackgroundLayout";
import LoaderWindow from "../../components/global/loading/loaderWindow/LoaderWindow";
import backgroundImage from "../../../public/img/user-background.jpg";
import { useFirebaseUser } from "../../contexts/FirebaseUserContext";

function Layout({ children }: ChildrenProp) {
  const { isLoggedIn, isLoading } = useFirebaseUser();
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.push("/user/overview");
  }, [isLoggedIn, router]);

  if (isLoading) return <LoaderWindow />;

  if (isLoggedIn) return null;
  return (
    <GameBackgroundLayout image={backgroundImage}>
      {children}
    </GameBackgroundLayout>
  );
}

export default Layout;
