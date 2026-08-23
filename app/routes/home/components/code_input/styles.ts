import styled from "styled-components";

export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  opacity: 0
`;

export const CodeContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  cursor: text;
`;

export const CodeSection = styled.div<{ $empty: boolean; $active: boolean }>`
    flex: 1;
    aspect-ratio: 1;
    border: 2px solid ${props => props.$active ? 'var(--accent)' : props.$empty ? 'var(--line)' : 'var(--ink)'};
    color: ${props => props.$active ? 'var(--accent)' : 'var(--ink)'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 38px;
`;

export const Label = styled.label`
    font-family: ui-monospace,monospace;
    width: 100%;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dim);
`;