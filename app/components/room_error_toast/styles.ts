import styled from "styled-components"

export const Container = styled.div`
    font-size: 16px;
    border: 1px solid var(--line);
    background: var(--panel);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const BackHomeButton = styled.button`
    cursor: pointer;
    border: 2px solid var(--ink);
    font-family: 'Archivo Black',Archivo,sans-serif;
    text-align: center;
    padding: 14px;
    &:hover {
        color: var(--accent);
        border-color: var(--accent);
    }
`