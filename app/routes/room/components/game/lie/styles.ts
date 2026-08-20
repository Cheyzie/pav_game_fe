import styled from "styled-components";

export const Caption = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dim);
`;

export const LieInput = styled.input`
    background: var(--panel);
    border: 2px solid var(--ink);
    padding: 16px;
    font-size: 20px;
    line-height: 1.3;
    color: var(--dim);
    min-height: 96px;
    &:focus {
        outline: 2px solid var(--accent);
    }
`;

export const LabelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: ui-monospace,monospace;
    font-size: 11px;
    color: var(--dim);
`;

export const LabelItem = styled.div<{ $warn: boolean }>`
    display: flex;
    justify-content: space-between;
    font-family: ui-monospace,monospace;
    font-size: 11px;
    color: var(${props => props.$warn ? '--accent' : '--dim'});
`;