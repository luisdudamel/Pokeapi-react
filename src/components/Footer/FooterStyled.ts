import { styled } from "styled-components";

export const FooterStyled = styled.footer`
    background-color: red;
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: center;
`;

export const StyledPaginationButton = styled.button`
    background-color: #ffde00;
    color: black;
    border: 0px;
    width: 100px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    font-family: "Roboto";
    font-weight: 600;
`;

export const StyledPaginationCounter = styled.span`
    letter-spacing: 3px;
`;

export const StyledPaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;
