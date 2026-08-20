import styled from "styled-components";

export const Container = styled.div`
    border-right: 1px solid var(--line);
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: var(--bg);
`;

export const Footer = styled.div`
    margin-top: auto;
    font-family: ui-monospace,monospace;
    font-size: 11px;
    color: var(--dim);
    line-height: 1.6;
`;