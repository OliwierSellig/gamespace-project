"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ChildrenProp } from "../../../../utils/types/types";
import LoaderWindow from "../../../../components/global/loading/loaderWindow/LoaderWindow";
import { useUser } from "../../../../contexts/userContext/UserContext";

function Layout({ children }: ChildrenProp) {
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn && !isLoading) router.push("/login");
  }, [isLoading, isLoggedIn, router]);

  if (isLoading || !isLoggedIn) return <LoaderWindow />;
  return children;
}

export default Layout;
