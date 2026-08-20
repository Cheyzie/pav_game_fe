import styled from "styled-components"

export const Container = styled.div<{ $selected:boolean, $disabled: boolean }>`
    border: ${props => props.$selected ? '2px solid var(--accent)' :'1px solid var(--line)'};
    background: ${props => props.$selected ? 'var(--accent)' : 'var(--panel)'};
    color: ${props => props.$disabled ? 'var(--dim)' : props.$selected ? 'var(--accent-ink)' : 'var(--ink)'};
    padding: 22px;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    cursor: ${props => props.$disabled ? 'default' : 'pointer'};
    &:hover {
        border-color: ${props => props.$disabled ? 'var(--line)' : 'var(--accent)'};
        color: ${props => props.$disabled ? 'var(--dim)' : 'var(--accent)'};
        background: ${props => props.$selected && props.$disabled ? 'var(--accent)' : 'var(--panel)'};
    }
`

export const AnswerState = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 12px;
    align-self: center;
`