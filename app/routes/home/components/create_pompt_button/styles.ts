import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    width: 100%;
    border-top: 1px solid var(--line);
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    &: hover {
        padding-bottom: 10px;
        border-bottom: 2px solid var(--accent);
    }
`

export const TextBlock = styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
`

export const Title = styled.div`
    font-size: 17px;
    font-weight: 600;
`

export const Subtitle = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    color: var(--dim);
`

export const Sign = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 16px;
    color: var(--accent);
`