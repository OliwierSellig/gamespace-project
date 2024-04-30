"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import CollectionViewLayout from "../../../components/collections/layout/collectionViewLayout/CollectionViewLayout";
import LoaderWindow from "../../../components/global/loading/loaderWindow/LoaderWindow";
import { useUser } from "../../../contexts/UserContext";

function Layout({
  params,
  children,
}: {
  params: { id: string };
  children: ReactNode;
}) {
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn && !isLoading) router.push("/login");
  }, [isLoading, isLoggedIn, router]);

  if (isLoading || !isLoggedIn) return <LoaderWindow />;

  return <CollectionViewLayout id={params.id}>{children}</CollectionViewLayout>;
}

export default Layout;
