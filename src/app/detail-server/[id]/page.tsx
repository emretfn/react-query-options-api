import DetailPage from "@/component/detail-page";
import { characterQuery } from "@/queries/characters";
import getQueryClient from "@/utils/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

type Params = Promise<{ id: string }>;

export default async function DetailServer(props: { params: Params }) {
  const { id } = await props.params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(characterQuery(id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DetailPage />
    </HydrationBoundary>
  );
}
