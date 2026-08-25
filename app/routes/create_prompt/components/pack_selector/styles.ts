import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-height: 0;
`

export const Header = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
`

export const HeaderTitle = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dim);
`

export const HeaderDescription = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dim);
`

export const InputContainer = styled.div`
    border: 1px solid var(--line);
    background: var(--bg);
    padding: 11px 14px;
    font-size: 18px;
    color: var(--dim);
    display: flex;
    align-items: center;
    gap: 8px;
    &:focus-within {
        border: 2px solid var(--accent);
    }
`

export const InputPrefix = styled.span`
    font-family: ui-monospace,monospace;
    font-size: 13px;
    color: var(--accent);
`

export const Input = styled.input`
    background: transparent;
    font-family: ui-monospace,monospace;
    font-size: 13px;
    color: var(--dim);
    border: none;
    outline: none;
    caret-color: var(--accent); 
`

export const Select = styled.div`
    border: 1px solid var(--line);
    background: var(--bg);
    max-height: 100px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    @media (min-width: 1000px) {
        max-height: 250px;
    }
`

export const SelectAddButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px 14px;
    border-top: 1px dashed var(--dim);
`

export const SelectAddButtonSign = styled.span`
    font-family: ui-monospace,monospace;
    font-size: 14px;
    color: var(--accent);
`

export const SelectAddButtonText = styled.span`
    font-size: 16px;
`

export const Footer = styled.span`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    color: var(--dim);
    line-height: 1.5;
`