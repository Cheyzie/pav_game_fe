import styled from "styled-components";

export const LinkContainer = styled.div`
    text-align: center;
    font-size: 15px;
    color: var(--dim);
`

export const Outer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    height: 100%;
`;

export const Phrase = styled.div`
    width: 100%;
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 52px;
    font-weight: 900;
    line-height: 0.92;
    letter-spacing: -0.03em;
`;

export const Description = styled.div`
    width: 100%;
    font-size: 16px;
    color: var(--dim);
    line-height: 1.45;
    margin-top: -8px;
`;

export const FieldContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 5px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 5px;
`;
export const Label = styled.label`
    font-family: ui-monospace,monospace;
    width: 100%;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dim);
`;


export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid var(--line);
  background-color: var(--bg);
  padding: 16px;
  font-size: 19px;
  color: var(--ink);
  &:focus {
    border-color: var(--ink);
  }
`;

export const SubmitButton = styled.button< { $disabled: boolean } >`
    border: ${ props => props.$disabled ? '2px solid var(--ink)' : '2px solid var(--accent)'};
    cursor: ${ props => props.$disabled ? 'default' : 'pointer'};
    background: ${ props => props.$disabled ? 'inherit' : 'var(--accent)'};
    color: ${ props => props.$disabled ? 'var(--dim)' : 'var(--accent-ink)'};
    opacity: ${ props => props.$disabled ? 0.4 : 1};
    font-size: 26px;
    font-weight:900;
    text-align: center;
    padding: 20px;
    width: 100%;
    font-family: "Archivo Black","Archivo",sans-serif;
    &:hover {
        background: inherit;
        color: var(--dim);
    }
`
