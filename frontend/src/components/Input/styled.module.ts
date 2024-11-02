import styled from "styled-components";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const StyledInput = styled.input`
    padding: 1rem; /* Aumenta o padding */
    font-size: 1.1rem; /* Aumenta o tamanho da fonte */
    border: 2px solid #e0e0e0; /* Borda completa e mais espessa */
    border-radius: 8px; /* Arredondamento dos cantos */
    outline: none;
    width: 100%; 
    box-sizing: border-box;
    background-color: #f9f9f9; /* Cor de fundo mais clara */
    color: #333; /* Cor do texto */

    &:focus {
        border-color: #ff6f61; /* Cor da borda ao focar */
        box-shadow: 0 0 5px rgba(255, 111, 97, 0.3); /* Sombra ao focar */
        background-color: #fff; /* Fundo branco ao focar */
    }

    &::placeholder {
        color: #888; /* Placeholder com cor suave */
    }
`;