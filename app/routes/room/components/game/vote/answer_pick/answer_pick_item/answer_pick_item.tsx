import { AnswerState, Container } from "./styles";

export function AnswerPickItem(
    { answer, disabled, selected, locked, onCheck }: 
        { answer: string, disabled: boolean, selected: boolean, locked: boolean, onCheck: VoidFunction }) {
    return (<Container onClick={() => !disabled && !locked && onCheck()} $selected={selected} $disabled={disabled || locked}>
        <div>{answer}</div>
        {disabled && <AnswerState>YOUR LIE</AnswerState>}
        {selected && <AnswerState>PICKED</AnswerState>}
    </Container>)
}