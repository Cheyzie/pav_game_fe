import styled from "styled-components";

export const ColumnHeader = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dim);
`;

export const GameButton = styled.button<{ $validated: boolean, $locked: boolean }>`
    cursor: ${ props => props.$validated && !props.$locked ? 'pointer' : 'default'};
    background: ${ props => props.$validated && !props.$locked ? 'var(--accent)' : 'inherit'};
    border: ${props => props.$locked ? '2px solid var(--line)' : '2px solid var(--accent)' };
    color: ${props => props.$validated && !props.$locked ? 'var(--accent-ink)' : 'var(--dim)'};
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 24px;
    text-align: center;
    padding: 20px;
    opacity: ${ props => props.$validated && !props.$locked ? 1 : 0.4 };
    &:hover {
        background: inherit;
        color: ${props => props.$validated && !props.$locked ? 'var(--accent)' : 'var(--dim)'};
    }
`

export const TitleGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Title = styled.div`
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 34px;
    line-height: 1;
    letter-spacing: -0.02em;
`;