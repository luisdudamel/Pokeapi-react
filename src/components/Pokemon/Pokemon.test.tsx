import { vi } from "vitest";
import { useNavigate } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { mockPikachu } from "../../mocks/pokemon";
import Pokemon from "./Pokemon";
import userEvent from "@testing-library/user-event";

vi.mock("react-router-dom");

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

    describe("When the user clicks on it", () => {
        test("Then it should call useNavigate", () => {
            const pokemonToShow = mockPikachu;
            const expectedPokemonName = "Pikachu";

            render(<Pokemon pokemon={pokemonToShow} />);

            const pokemonHeading = screen.getByRole("heading", {
                name: expectedPokemonName,
            });
            userEvent.click(pokemonHeading);

            expect(useNavigate).toHaveBeenCalled();
        });
    });
});
