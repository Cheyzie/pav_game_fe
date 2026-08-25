import { useRef, useState } from "react";
import styled from "styled-components";
import { CodeContainer, CodeSection, HiddenInput, Label } from "./styles";
import type { CodeInputProps } from "../../types/code_input_props";

const CODE_LENGTH = 4;

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
