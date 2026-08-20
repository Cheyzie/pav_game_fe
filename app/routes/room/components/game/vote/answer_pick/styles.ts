import styled from "styled-components";

export const Container = styled.div<{ $locked: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
    opacity: ${ props => props.$locked ? 0.4 : 1 }
`;