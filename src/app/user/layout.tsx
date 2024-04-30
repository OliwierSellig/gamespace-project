"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ChildrenProp } from "../../utils/types/types";
import LoaderWindow from "../../components/global/loading/loaderWindow/LoaderWindow";
import UserLayout from "../../components/user/layout/userLayout/UserLayout";
import { useUser } from "../../contexts/UserContext";

function Layout({ children }: ChildrenProp) {
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn && !isLoading) router.push("/");
  }, [isLoading, isLoggedIn, router]);

  if (isLoading) return <LoaderWindow />;

  if (!isLoggedIn && !isLoading) return null;
  return <UserLayout>{children}</UserLayout>;
}

export default Layout;
