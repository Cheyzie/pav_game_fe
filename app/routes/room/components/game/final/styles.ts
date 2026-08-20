import styled from "styled-components";

export const RestartButton = styled.button`
    cursor: pointer;
    background: var(--panel);
    border: 2px solid var(--ink);
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 22px;
    text-align: center;
    padding: 18px;
    &:hover {
        color: var(--accent);
        border-color: var(--accent);
    }
`