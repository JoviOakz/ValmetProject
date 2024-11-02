import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 70%;
    height: 60%;
    border: 3px solid green;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    flex-direction: column;
    gap: 3rem;
`;

export const StyledInformation = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    & > * {
        flex: 1;
        max-width: 100%;
    }
`;

export const StyledDescription = styled.div`
    width: 80%;
`;

export const StyledDates = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    & > * {
        flex: 1;
        max-width: 100%;
    }
`;