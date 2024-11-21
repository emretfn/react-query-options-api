"use client";

import React from "react";
import CharacterCard from "./character-card";
import { parseAsInteger, useQueryState } from "nuqs";
import { useQuery } from "@tanstack/react-query";
import { charactersQuery } from "@/queries/characters";

const CharacterListPage = () => {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const { data } = useQuery(charactersQuery(page));
  return (
    <div className="grid grid-cols-4 gap-4 place-items-center">
      {data?.results?.map((c) => (
        <CharacterCard character={c} key={c.id} />
      ))}
      <div className="flex justify-center col-span-full gap-8 mt-4">
        <button
          className="bg-gray-600 text-gray-100 px-6 py-3 rounded-full disabled:bg-gray-400 disabled:text-gray-200"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Önceki sayfa
        </button>
        <button
          className="bg-gray-600 text-gray-100 px-6 py-3 rounded-full disabled:bg-gray-400 disabled:text-gray-200"
          onClick={() => setPage(page + 1)}
        >
          Sonraki Sayfa
        </button>
      </div>
    </div>
  );
};

export default CharacterListPage;
