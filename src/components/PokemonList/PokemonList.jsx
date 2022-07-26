import PropTypes from "prop-types";
import PokemonListItem from "../PokemonListItem/PokemonListItem";

function onItemClick(event) {
  console.log(event);
}

function PokemonList({ pokemonList }) {
  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon, index) => (
        <PokemonListItem
          key={index}
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
