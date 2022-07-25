import PokemonCard from "../../components/PokemonCard/PokemonCard";
import PokemonList from "../../components/PokemonList/PokemonList";

function PokedexPage() {
  return (
    <div className="pokedex-page">
      <PokemonCard></PokemonCard>
      <PokemonList></PokemonList>
    </div>
  );
}

export default PokedexPage;
