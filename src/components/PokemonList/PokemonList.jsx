import { useEffect } from "react";
import PropTypes from "prop-types";
import PokemonListItem from "../PokemonListItem/PokemonListItem";

function PokemonList({ pokemonList, onPokemonSelected }) {
  function onItemClick(event) {
    onPokemonSelected(event);
  }

  useEffect(() => {
    if (pokemonList.length) onPokemonSelected(pokemonList[0].name);
  }, [pokemonList]);

  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon, index) => (
        <PokemonListItem
          key={index}
          pokemonNumber={`${index + 1}`}
          pokemonName={pokemon.name}
          onItemClick={onItemClick}
        />
      ))}
    </div>
  );
}

export default PokemonList;

PokemonList.propTypes = {
  pokemonList: PropTypes.array,
};
