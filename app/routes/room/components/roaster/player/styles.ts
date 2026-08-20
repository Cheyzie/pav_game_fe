import styled from "styled-components"

export const PlayerContainer = styled.div<{$is_me: boolean, $connected: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 12px;
    border-left: 3px solid var(${props => props.$is_me ? '--accent' :'--line'});
    opacity: ${props => props.$connected ? 1: 0.4}
`

export const Nickname = styled.div`
    font-size: 18px;
    & > span {
        font-family: ui-monospace,monospace;
        font-size: 10px;
        color: var(--accent);
    }
`

export const Score = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 12px;
    color: var(--dim);
`