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

const Footer = (): JSX.Element => {
    return (
        <FooterStyled>
            <StyledPaginationContainer>
                <StyledPaginationButton>
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                </StyledPaginationButton>
                <StyledPaginationCounter>10/1200</StyledPaginationCounter>
                <StyledPaginationButton>
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                </StyledPaginationButton>
            </StyledPaginationContainer>
        </FooterStyled>
    );
};

export default Footer;
