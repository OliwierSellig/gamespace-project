"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ChildrenProp } from "../../utils/types/types";
import LoaderWindow from "../../components/global/loading/loaderWindow/LoaderWindow";
import UserLayout from "../../components/user/layout/userLayout/UserLayout";
import { useAuth } from "../../contexts/AuthContext";

function Layout({ children }: ChildrenProp) {
  const { isUserLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoggedIn && !isLoading) router.push("/");
  }, [isLoading, isUserLoggedIn, router]);

  if (isLoading) return <LoaderWindow />;

  if (!isUserLoggedIn && !isLoading) return null;
  return <UserLayout>{children}</UserLayout>;
}

export default Layout;
