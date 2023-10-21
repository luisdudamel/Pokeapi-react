import StyledButton from "./StyledButton";

interface ButtonProps {
    buttonText: string;
    buttonAction: () => void;
}

const Button = ({ buttonText, buttonAction }: ButtonProps): JSX.Element => {
    return (
        <StyledButton onClick={() => buttonAction()}>{buttonText}</StyledButton>
    );
};

export default Button;
