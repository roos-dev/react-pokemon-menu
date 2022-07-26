import { useState, useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import PokemonList from "../../components/PokemonList/PokemonList";
import PokemonService from "../../services/PokemonService";

function PokedexPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const pokemonImage = "";

  async function getPokemons() {
    setPokemonList(await PokemonService.getPokemons());
  }
  
  useEffect( () => {
    getPokemons();
  }, []);
  

  return (
    <div className="pokedex-page">
      <PokemonCard pokemonImage={pokemonImage} className="pokemon-card" />
      <PokemonList pokemonList={pokemonList} className="pokemon-list" />
    </div>
  );
}

export default PokedexPage;
