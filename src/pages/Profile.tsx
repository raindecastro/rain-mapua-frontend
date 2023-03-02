import React, { useEffect } from "react";
import { useQueryPokemon } from "../hooks/usePokemon";
import { useParams } from "react-router-dom";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const { search, pokemon } = useQueryPokemon();
  const { pokemonName } = useParams();

  useEffect(() => {
    if (pokemonName) {
      search(pokemonName);
    }
  }, []);

  useEffect(() => {
    console.log("POKEMON", pokemon);
  }, [pokemon]);

  return <>i'm profile</>;
};

export default Profile;
