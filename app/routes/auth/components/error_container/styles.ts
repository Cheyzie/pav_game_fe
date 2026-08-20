import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border-left: 3px solid var(--accent);
    background: var(--panel);
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    box-sizing: border-box
`

export const Header = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
`

export const Content = styled.div`
    font-size: 16px;
    line-height: 1.35;
`