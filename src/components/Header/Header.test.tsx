import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { vi } from "vitest";

vi.mock("react-router-dom", async () => {
    const actual = (await vi.importActual("react-router-dom")) as object;
    return {
        ...actual,
        useNavigate: vi.mock,
    };
});

describe("Given a Header component", () => {
    describe("When invoked", () => {
        test("Then it should show a heading with the text `POKE-REACT`", () => {
            const expectedHeadingText = "POKE-REACT";

            render(<Header pokemonNames={[""]} />);
            const heading = screen.getByRole("heading", {
                name: expectedHeadingText,
            });

            expect(heading).toBeInTheDocument();
        });
    });
});
