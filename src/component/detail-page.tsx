"use client";

import { characterQuery } from "@/queries/characters";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import React from "react";

const DetailPage = () => {
  const queryClient = useQueryClient();
  const params = useParams();

  if (!params.id) {
    notFound();
  }

  // Just for the example, in normal conditions we can use useQuery but I wanted to show that we can get the data in a type-safe way
  const data = queryClient.getQueryData(characterQuery(params.id.toString()).queryKey);

  if (!data) return null;

  return (
    <div className="flex gap-4">
      <Image src={data.image} alt={data.name} width={400} height={400} className="rounded-lg" />
      <div className="flex-1 flex flex-col gap-y-2">
        <div>
          <h1 className="text-4xl font-semibold">{data.name}</h1>
          <p className="text-gray-700">
            {data.gender} - {data.species}
          </p>
        </div>
        <div className="w-full h-px bg-gray-200" />
        <div>
          Location:{" "}
          <Link className="underline underline-offset-2" href={data.location.url} target="_blank">
            {data.location.name}
          </Link>
        </div>
        <div>
          Origin:{" "}
          <Link className="underline underline-offset-2" href={data.origin.url} target="_blank">
            {data.origin.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
