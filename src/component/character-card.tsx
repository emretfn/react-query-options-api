import { Character } from "@/types/character";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <span className="bg-gray-100 grid rounded-lg gap-2 overflow-hidden w-full">
      <div className="flex shrink-0">
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          className="aspect-square object-cover w-full "
        />
      </div>
      <div className="flex flex-col px-4 py-2 gap-y-2">
        <h5 className="text-2xl line-clamp-1">{character.name}</h5>
        <div className="flex gap-x-4 ">
          <Link
            className="px-3 py-1.5 bg-gray-600 rounded-md text-gray-100"
            href={`/detail-server/${character.id}`}
          >
            Server
          </Link>
          <Link
            className="px-3 py-1.5 bg-gray-600 rounded-md text-gray-100"
            href={`/detail-client/${character.id}`}
          >
            Client
          </Link>
        </div>
      </div>
    </span>
  );
};

export default CharacterCard;
