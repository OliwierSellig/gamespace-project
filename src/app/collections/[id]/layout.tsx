"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import CollectionViewLayout from "../../../components/collections/layout/collectionViewLayout/CollectionViewLayout";
import LoaderWindow from "../../../components/global/loading/loaderWindow/LoaderWindow";
import { useAuth } from "../../../contexts/AuthContext";

function Layout({
  params,
  children,
}: {
  params: { id: string };
  children: ReactNode;
}) {
  const { isUserLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoggedIn && !isLoading) router.push("/login");
  }, [isLoading, isUserLoggedIn, router]);

  if (isLoading || !isUserLoggedIn) return <LoaderWindow />;

  return <CollectionViewLayout id={params.id}>{children}</CollectionViewLayout>;
}

export default Layout;
