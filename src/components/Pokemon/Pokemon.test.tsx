import { render, screen } from "@testing-library/react";
import { mockPikachu } from "../../mocks/pokemon";
import Pokemon from "./Pokemon";

describe("Given a Pokemon component", () => {
    describe("When it receives a pokemon with the name `Pikachu`", () => {
        test("Then it should show a heading with the name `Pikachu`", () => {
            const pokemonToShow = mockPikachu;
            const expectedPokemonName = "Pikachu";

            render(<Pokemon pokemon={pokemonToShow} />);

            const pokemonHeading = screen.getByRole("heading", {
                name: expectedPokemonName,
            });

            expect(pokemonHeading).toBeInTheDocument();
        });
    });
});
