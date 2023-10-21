import { styled } from "styled-components";

export const StyledPokemon = styled.li`
    border: solid 2px red;
    height: 300px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Roboto";
    cursor: pointer;
`;

export const StyledPokemonName = styled.h3`
    font-family: "Pokemon-Solid";
    letter-spacing: 3px;
`;

export const StyledPokemonImage = styled.img`
    width: 120px;
`;

export const StyledPokemonStats = styled.ul`
    list-style: none;
    padding-left: 0px;
`;

export const StyledPokemonListItem = styled.span`
    font-weight: 600;
`;
