import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid var(--accent);
    background: var(--panel);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Header = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
`

export const Description = styled.div`
    font-size: 19px;
    line-height: 1.35;
`