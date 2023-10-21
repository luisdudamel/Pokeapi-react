import Button from "./components/Button/Button";

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
            </div>
        </>
    );
};

export default App;
