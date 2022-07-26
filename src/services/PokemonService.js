import config from "../config.json";
import axios from "axios";

class PokemonService {
  constructor() {}

  async getPokemons() {
    return (
      await axios.get(config.urls.pokemon, {
        params: {
          limit: config.pokemonListAmount,
        },
      })
    ).data.results;
  }

  async getPokemonByName(pokemonName) {
    return await axios.get(
      config.urls.pokemonByName.replace(":name", pokemonName)
    );
  }
}

export default new PokemonService();
