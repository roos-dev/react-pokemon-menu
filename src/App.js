
import './App.scss';
import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonList from "./components/PokemonList/PokemonList";

function App() {
  return (
    <div className="App">
      <PokemonCard></PokemonCard>
      <PokemonList></PokemonList>
    </div>
  );
}

export default App;
