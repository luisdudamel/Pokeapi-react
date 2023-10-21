import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Button from "./Button";
import { vitest } from "vitest";

describe("Given a Button component", () => {
    describe("When it receives the text `Get pokemons`", () => {
        test("Then it should show a button with the text `Get pokemons`", () => {
            const expectedButtonText = "Get pokemons";
            const buttonAction = vitest.fn();

            render(
                <Button
                    buttonText={expectedButtonText}
                    buttonAction={buttonAction}
                />
            );

            const button = screen.getByRole("button", {
                name: expectedButtonText,
            });
            expect(button).toBeInTheDocument();
        });
    });
    4;

    describe("When it receives an action and the user clicks on the button", () => {
        test("Then it should call the received action", async () => {
            const actionReceived = vitest.fn();
            const expectedButtonText = "Pokemon";

            render(
                <Button buttonText="Pokemon" buttonAction={actionReceived} />
            );

            const button = screen.getByRole("button", {
                name: expectedButtonText,
            });

            await userEvent.click(button);

            expect(actionReceived).toHaveBeenCalled();
        });
    });
});
