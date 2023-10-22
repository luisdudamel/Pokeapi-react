import {
    FooterStyled,
    StyledPaginationContainer,
    StyledPaginationCounter,
} from "./FooterStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { StyledPaginationButton } from "./FooterStyled";

interface FooterProps {
    totalPokemons: number;
    pokemonsShown: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Footer = ({
    totalPokemons,
    currentPage,
    setCurrentPage,
    pokemonsShown,
}: FooterProps): JSX.Element => {
    return (
        <FooterStyled>
            <StyledPaginationContainer>
                <StyledPaginationButton
                    onClick={() => {
                        if (currentPage > 0) setCurrentPage(currentPage - 10);
                    }}
                >
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                </StyledPaginationButton>
                <StyledPaginationCounter>
                    {pokemonsShown}/{totalPokemons}
                </StyledPaginationCounter>
                <StyledPaginationButton
                    onClick={() => {
                        if (currentPage < totalPokemons)
                            setCurrentPage(currentPage + 10);
                    }}
                >
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                </StyledPaginationButton>
            </StyledPaginationContainer>
        </FooterStyled>
    );
};

export default Footer;
