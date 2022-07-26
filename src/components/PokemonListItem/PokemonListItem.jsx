import PropTypes from "prop-types";

export default function PokemonListItem({
  pokemonName,
  pokemonNumber,
  onItemClick,
}) {
  return (
    <div className="list-item" onClick={() => onItemClick(pokemonName)}>
      <h2 className="list-item__text">{`No ${pokemonNumber} ${pokemonName.toUpperCase()}`}</h2>
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
