import { getCharacterService, getCharactersService } from "@/services/characters";
import { queryOptions } from "@tanstack/react-query";

// Query options api allows us to link key and fetch functions together.

export const characterQuery = (id: string) => {
  return queryOptions({
    queryKey: ["character", id],
    queryFn: () => getCharacterService({ id }),
  });
};

export const charactersQuery = (page: number = 1) => {
  return queryOptions({
    queryKey: ["characters", `page=${page}`],
    queryFn: () => getCharactersService({ page }),
  });
};
