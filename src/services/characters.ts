import { Character, CharacterList } from "@/types/character";

const charactersUrl = "https://rickandmortyapi.com/api/character";

export const getCharactersService = async ({
  page = 1,
}: {
  page: number;
}): Promise<CharacterList> => {
  const res = await fetch(`${charactersUrl}?page=${page}`);
  const data = await res.json();

  return data;
};
export const getCharacterService = async ({ id }: { id: string }): Promise<Character> => {
  const res = await fetch(`${charactersUrl}/${id}`);
  const data = await res.json();

  return data;
};
