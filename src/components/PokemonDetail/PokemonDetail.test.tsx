import { render, screen } from "@testing-library/react";
import PokemonDetail from "./PokemonDetail";
import { mockPikachu } from "../../mocks/pokemon";

describe("Given a PokemonDetailComponent", () => {
    describe("When invoked with a pokemon named `Pikachu`", () => {
        test("Then it should show an image with the alternative text `Pikachu in 8bits`", () => {
            const expectedAlternativeText = "Pikachu in 8bits";

            render(<PokemonDetail pokemon={mockPikachu} />);
            const pokemonImage = screen.getByAltText(expectedAlternativeText);

            expect(pokemonImage).toBeInTheDocument();
        });
    });
});
