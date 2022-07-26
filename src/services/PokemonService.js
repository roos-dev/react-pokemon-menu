import config from "../config.json"
import axios from "axios";


class PokemonService {
    constructor() {}

    async getPokemons() {
        return (await axios.get(config.urls.pokemon)).data.results;
    }
}

export default new PokemonService();