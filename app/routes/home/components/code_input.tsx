import { useRef, useState } from "react";
import styled from "styled-components";

const CODE_LENGTH = 4;

const HiddenInput = styled.input`
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

const CodeContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  cursor: text;
`;

const CodeSection = styled.div<{ $empty: boolean; $active: boolean }>`
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

const Label = styled.label`
    font-family: ui-monospace,monospace;
    width: 100%;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dim);
`;


type CodeInputProps = {
    id?: string;
    placeholder?: string;
    value?: string;
    onCodeChange: (code: string) => void;
};

export default function CodeInput({ placeholder = "Enter code", value = "", onCodeChange, ...props }: CodeInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        // Programmatically focus the visually hidden input
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    const code = value.slice(0, CODE_LENGTH);
    const [focused, setFocused] = useState(false);
    return (<>
        <HiddenInput
            ref={inputRef}
            id={props.id}
            type="text"
            value={code}
            onChange={(e) => onCodeChange(e.target.value.slice(0, CODE_LENGTH).toUpperCase())}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
        />
        <Label htmlFor={props.id}>Join with code</Label>
        <CodeContainer onClick={handleButtonClick}>
            {Array.from({ length: CODE_LENGTH }, (_, i) => (
                <CodeSection
                    key={i}
                    $empty={!code.charAt(i)}
                    $active={focused && Math.min(code.length, CODE_LENGTH - 1) === i}
                >
                    {code.charAt(i)}
                </CodeSection>
            ))}
        </CodeContainer>
        <Label htmlFor={props.id}>no I, O, 0 or 1 — codes get read aloud</Label>
    </>)
}
