"use client";

import DetailPage from "@/component/detail-page";
import { characterQuery } from "@/queries/characters";
import { useQuery } from "@tanstack/react-query";
import { notFound, useParams } from "next/navigation";

export default function DetailClient() {
  const params = useParams();
  if (!params.id) notFound();
  // Just for the example, getQueryData is used inside DetailPage component so we need to fetch for that
  useQuery(characterQuery(params.id.toString()));

  return (
    <div>
      <DetailPage />
    </div>
  );
}
