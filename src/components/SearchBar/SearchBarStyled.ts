import { styled } from "styled-components";

export const SearchBarStyled = styled.form`
    input:focus,
    input:focus-visible {
        border: none;
        outline: none;
    }
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .clear-button-hidden {
        opacity: 0;
    }
`;

export const SearchInputStyled = styled.input`
    height: 40px;
    border-radius: 10px;
    width: 300px;
    border: none;
    padding-left: 10px;
`;

export const SearchResultsOverlay = styled.ul`
    position: relative;
    top: -20px;
    left: -10px;
    margin-top: 0px;
    background-color: white;
    padding-left: 15px;
    width: 300px;
    height: 30vh;
    overflow: scroll;
    border-radius: 10px;
    letter-spacing: 2px;
`;

export const SearchResult = styled.li`
    list-style: none;
    cursor: pointer;
`;

export const SearchClearButtonStyled = styled.span`
    position: relative;
    background: none;
    border: none;
    right: 30px;
    cursor: pointer;
`;

export const UnexistentFeedbackStyled = styled.span``;
