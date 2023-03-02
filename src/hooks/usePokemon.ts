import { useRef, useState } from "react";
import { useQuery } from "react-query";
import throttle from "lodash/throttle";
import PokemonAPI from "../api/pokemon";

export const useQueryPokemon = () => {
  const [name, setName] = useState("");

  const query = useQuery(
    ["pokemon", name],
    () => {
      return PokemonAPI.getPokemon(name);
    },
    {
      keepPreviousData: true,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const { current: search } = useRef(
    throttle(async (value: string) => {
      if (value) {
        setName(value);
      }
    }, 500)
  );

  return {
    ...query,
    search,
    pokemon: query.data?.data,
  };
};
