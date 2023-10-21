import { render, screen } from "@testing-library/react";
import PokemonList from "./PokemonList";
import { mockCharizard, mockPikachu } from "../../mocks/pokemon";
import { Pokemon } from "../../types/pokemon";
import { vi } from "vitest";

vi.mock("react-router-dom", async () => {
    const actual = (await vi.importActual("react-router-dom")) as object;
    return {
        ...actual,
        useNavigate: vi.mock,
    };
});

describe("Given a PokemonList component", () => {
    describe("When it receives a list of 2 pokemons named Pikachu and Charizard", () => {
        test("Then it should show a list with two elements with name Pikachu and Charizard", () => {
            const mockPokemons: Pokemon[] = [mockCharizard, mockPikachu];
            const expectedPikachuName = "Pikachu";
            const expectedCharizardName = "Charizard";

            render(
                <>
                    <PokemonList pokemons={mockPokemons} />
                </>
            );

            const pikachuHeading = screen.getByRole("heading", {
                name: expectedPikachuName,
            });
            const charizardHeading = screen.getByRole("heading", {
                name: expectedCharizardName,
            });

            expect(pikachuHeading).toBeInTheDocument();
            expect(charizardHeading).toBeInTheDocument();
        });
    });
});
