import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border: 1px solid var(--line);
    padding: 12px;
`

export const Label = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dim);
    margin-right: 2px;
`

export const LangsContainer = styled.div`
    display: flex;
    gap: 6px;
`

export const LangItem = styled.div<{ $active: boolean }>`
    cursor: ${props => props.$active ? 'default' : 'pointer'};
    border: ${props => props.$active ? '1px solid var(--accent)' : '1px solid var(--line)'};
    color: ${props => props.$active ? 'var(--accent-ink)' : 'var(--dim)'};
    background: ${props => props.$active ? 'var(--accent)' : 'transparent'};
    padding: 5px 9px;
    font-family: ui-monospace,monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    &:hover {
        border: 1px solid var(--accent);
        color: ${props => props.$active ? 'var(--accent-ink)' : 'var(--accent)'};
        background: ${props => props.$active ? 'var(--accent)' : 'transparent'};
    }
`