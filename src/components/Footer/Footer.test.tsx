import { render, screen } from "@testing-library/react";
import { mockPokemonList } from "../../mocks/pokemon";
import Footer from "./Footer";

describe("Given a Footer component", () => {
    describe("When invoked", () => {
        test("Then it should show two buttons", () => {
            const expectedButtonCount = 2;

            render(
                <Footer
                    currentPage={0}
                    totalPokemons={mockPokemonList.length}
                    pokemonsShown={5}
                    setCurrentPage={() => {}}
                />
            );

            const totalButtons = screen.getAllByRole("button");
            expect(totalButtons.length).toBe(expectedButtonCount);
        });
    });
});
