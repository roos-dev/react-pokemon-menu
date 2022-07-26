import PropTypes from 'prop-types';

export default function PokemonCard({ pokemonImage }) {
  return (
    <div className="pokemon-card">
      <img
        src={pokemonImage}
        alt="pokemon image"
        className="pokemon-card__image"
      />
    </div>
  );
}

PokemonCard.propTypes = {
    pokemonImage: PropTypes.string
}

PokemonCard.defaultProps = {
    pokemonImage: ""
}
