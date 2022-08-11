import { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import PokemonList from "../../components/PokemonList/PokemonList";
import PokemonService from "../../services/PokemonService";

function PokedexPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonImage, setPokemonImage] = useState(null);

  async function getPokemons() {
    setPokemonList(await PokemonService.getPokemons());
  }

  async function getPokemonImage(pokemonName) {
    const {
      data: { sprites },
    } = await PokemonService.getPokemonByName(pokemonName);
    setPokemonImage(sprites["front_default"]);
  }

  useEffect(() => {
    getPokemons()
  }, []);

  return (
    <div className="pokedex-page">
      <PokemonCard pokemonImage={pokemonImage} className="pokemon-card" />
      <PokemonList
        pokemonList={pokemonList}
        className="pokemon-list"
        onPokemonSelected={getPokemonImage}
      />
    </div>
  );
}

export default PokedexPage;
