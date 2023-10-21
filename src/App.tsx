import Button from "./components/Button/Button";
import Pokemon from "./components/Pokemon/Pokemon";
import { mockPokemon } from "./mocks/pokemon";

const App = (): JSX.Element => {
    return (
        <>
            <div className="main-container">
                <h1 className="main-heading">POKE-REACT</h1>
                <Button
                    buttonAction={() => {
                        console.log("holis");
                    }}
                    buttonText="Get all pokemons"
                />
                <Pokemon pokemon={mockPokemon} />
            </div>
        </>
    );
};

export default App;
