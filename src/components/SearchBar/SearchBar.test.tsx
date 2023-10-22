import { render, screen, within } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { mockPokemonNamesList } from "../../mocks/pokemon";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

vi.mock("react-router-dom", async () => {
    const actual = (await vi.importActual("react-router-dom")) as object;
    return {
        ...actual,
        useNavigate: vi.mock,
    };
});

const user = userEvent.setup();

describe("Given a SearchBar component", () => {
    describe("When invoked with a list of pokemons including the name `pikachu`", () => {
        describe("And the user types the name pikachu", () => {
            test("Then it should show a list with the name Pikachu included ", async () => {
                const pikachuNameTyped = "pikachu";
                const expectedPokemonName = "Pikachu";

                render(<SearchBar pokemons={mockPokemonNamesList} />);

                const searchInput = screen.getByLabelText("search-input");
                await user.type(searchInput, pikachuNameTyped);

                const searchedListItem = await screen.getByRole("list", {
                    name: "pokemon-list",
                });

                const { getAllByRole } = within(searchedListItem);

                const listItem = await getAllByRole("listitem");

                expect(listItem[0].textContent).toBe(expectedPokemonName);
            });
        });
    });
});
