import styled from "styled-components"

export const Container = styled.div<{ $selected: boolean }>`
    cursor: ${ props => props.$selected ? 'default' : 'pointer' };
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 14px;
    background: ${ props => props.$selected ? 'var(--accent)' : 'inherit' };
    color: ${ props => props.$selected ? 'var(--accent-ink)' : 'inherit' };
    border-top: ${ props => props.$selected ? '0px' : '1px solid var(--line)' };
`

export const Name = styled.span`
    font-size: 16px;
    &:first-letter {
        text-transform: uppercase;
    }
`
export const Highlight = styled.span`
    color: var(--accent);
`

export const Count = styled.span<{ $selected: boolean }>`
    font-family: ui-monospace,monospace;
    font-size: 10px;
    color: ${ props => props.$selected ? 'ingerit' : 'var(--dim)'};
`