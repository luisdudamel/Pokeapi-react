import styled from "styled-components";

export const PokemonDetailStyled = styled.article`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .game-boy-wrapper {
        display: flex;
        flex-direction: row; /* */
        flex-wrap: wrap;
        justify-content: center;
    }

    .game-boy {
        margin-top: 20px;
        background-color: #fffce9;
        height: 500px;
        width: 600px;
        border-radius: 0 0 20px 0;
        position: relative;
    }
    .game-boy-screen {
        background-color: #bdde62;
        height: 400px;
        border: solid 15px #524a50;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .controls-wrapper {
        position: relative;
        width: 100%;
        height: 120px;
    }
    .cross {
        top: 40px;
        left: 50px;
        position: absolute;
        width: 60px;
        height: 13px;
        background-color: #524a50;
    }
    .cross:before {
        content: "";
        top: -22px;
        left: 24px;
        position: absolute;
        width: 13px;
        height: 60px;
        background-color: #524a50;
    }

    .circle-buttons {
        top: 18px;
        right: 47px;
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ea7570;
        box-shadow: #ea7570 -53px 23px 0px 0px;
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
        &--left {
            display: flex;
            flex-direction: column;
        }

        &--right {
            display: flex;
            justify-content: space-around;
            align-items: center;

            .pokemon-image {
                width: 300px;
            }
        }
    }
`;
