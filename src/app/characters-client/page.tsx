"use client";

import CharacterListPage from "@/component/list-page";
import { Suspense } from "react";

export default function ClientPage() {
  return (
    <>
      <h1 className="text-3xl font-medium text-center mb-4">Client</h1>
      {/* We are using useSuspenseQuery in CharacterListPage*/}
      <Suspense fallback={<ListSkeleton />}>
        <CharacterListPage />
      </Suspense>
    </>
  );
}

const ListSkeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-4 place-items-center">
      {Array(10)
        .fill(0)
        .map((_i, index) => (
          <CharacterCardSkeleton key={index} />
        ))}
    </div>
  );
};

const CharacterCardSkeleton = () => {
  return <div className="animate-pulse rounded-lg w-full bg-gray-100 h-80" />;
};
