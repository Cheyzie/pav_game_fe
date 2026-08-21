import styled from "styled-components"

export const PlayerContainer = styled.div<{$is_me: boolean, $active: boolean, $connected: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    gap: 5px;
    opacity: ${props => props.$connected ? 1: 0.4};
    background: ${props => props.$active ? 'var(--accent)': 'inherit'};
    border: 1px solid var(${props => props.$is_me ? '--accent' :'--line'});

    @media (min-width: 1000px) {    
        padding: 10px 12px;
        background: transparent;
        border: 0;
        border-left: 3px solid var(${props => props.$is_me ? '--accent' :'--line'});
    }
`

export const Nickname = styled.div`
    font-size: 18px;
    display: flex;
    align-items: baseline;
    & > span {
        font-family: ui-monospace,monospace;
        font-size: 10px;
        color: var(--accent);
        display: none;
        @media (min-width: 1000px) {    
            display: block;
        }
    }
`

export const Score = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 12px;
    color: var(--dim);
`