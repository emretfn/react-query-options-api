import CharacterListPage from "@/component/list-page";
import { charactersQuery } from "@/queries/characters";
import getQueryClient from "@/utils/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ServerPage(props: { searchParams: SearchParams }) {
  const { page } = await props.searchParams;
  const pageNumber = Number(page);
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(charactersQuery(Number.isNaN(pageNumber) ? 1 : pageNumber));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h1 className="text-3xl font-medium text-center mb-4">Server</h1>
      <CharacterListPage />
    </HydrationBoundary>
  );
}
