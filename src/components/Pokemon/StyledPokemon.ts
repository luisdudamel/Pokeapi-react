import { styled } from "styled-components";

export const StyledPokemon = styled.li`
    height: 300px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Roboto";
    cursor: pointer;

    .game-boy-wrapper {
        display: flex;
        flex-direction: row; /* */
        flex-wrap: wrap;
        justify-content: center;
    }

    .game-boy {
        margin-top: 20px;
        background-color: #fffce9;
        height: 250px;
        width: 200px;
        border-radius: 0 0 20px 0;
        position: relative;
    }
    .game-boy-screen {
        background-color: #bdde62;
        height: 190px;
        border: solid 15px #524a50;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .controls-wrapper {
        position: relative;
        width: 100%;
        height: 120px;
    }
    .cross {
        top: 20px;
        left: 20px;
        position: absolute;
        width: 39px;
        height: 13px;
        background-color: #524a50;
    }
    .cross:before {
        content: "";
        top: -13px;
        left: 13px;
        position: absolute;
        width: 13px;
        height: 39px;
        background-color: #524a50;
    }

    .circle-buttons {
        top: 10px;
        right: 20px;
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #ea7570;
        box-shadow: #ea7570 -35px 10px 0px 0px;
    }
    .menu-buttons {
        left: calc(50% - 28px);
        bottom: 10px;
        position: absolute;
        width: 25px;
        height: 7px;
        background-color: #524a50;
        box-shadow: #524a50 30px 00px 0px 0px;
    }

    .screen-info-wrapper {
        &--bottom {
            display: flex;
        }

        &--top {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
`;

export const StyledPokemonName = styled.h3`
    font-family: "Pokemon-Solid";
    letter-spacing: 3px;
    font-size: 15px;
    margin-bottom: 0px;
    padding-left: 5px;
    margin-top: -5px;
    line-height: 25px;
`;

export const StyledPokemonImage = styled.img`
    width: 120px;
`;

export const StyledPokemonStats = styled.ul`
    list-style: none;
    padding-left: 0px;
    padding-right: 5px;
`;

export const StyledPokemonListItem = styled.span`
    font-weight: 600;
`;
