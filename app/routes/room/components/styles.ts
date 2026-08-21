import styled from "styled-components";

export const Outer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    max-height:100%;
    width: 100%;
`;
export const GameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    width: 100%;
    height: 100%;
    @media (min-width: 1000px) { 
        display: grid;
        grid-template-columns: 260px 1fr 320px;
    }
`;