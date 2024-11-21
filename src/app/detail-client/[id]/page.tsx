"use client";

import DetailPage from "@/component/detail-page";
import { characterQuery } from "@/queries/characters";
import { useQuery } from "@tanstack/react-query";
import { notFound, useParams } from "next/navigation";

export default function DetailClient() {
  const params = useParams();
  if (!params.id) notFound();
  const data = useQuery(characterQuery(params.id.toString()));
  return (
    <div>
      <DetailPage />
    </div>
  );
}
