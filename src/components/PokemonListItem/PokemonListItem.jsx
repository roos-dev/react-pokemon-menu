import PropTypes from "prop-types";

export default function PokemonListItem({
  pokemonName,
  pokemonNumber,
  onItemClick,
}) {
  return (
    <div className="list-item">
      <span
        onClick={() => onItemClick(pokemonName)}
      >{`No ${pokemonNumber} ${pokemonName.toUpperCase()}`}</span>
    </div>
  );
}

PokemonListItem.propTypes = {
  pokemonName: PropTypes.string,
  pokemonNumber: PropTypes.string,
};

PokemonListItem.defaultProps = {
  pokemonName: "",
  pokemonNumber: "000",
};
