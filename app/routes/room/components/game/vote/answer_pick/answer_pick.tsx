import { AnswerPickItem } from "./answer_pick_item/answer_pick_item";
import { useEffect, useState } from "react";
import { Container } from "./styles";

export function AnswerPick(
    { answer, answers, locked, onChange}: 
        { answer: string, answers: string[], locked: boolean, onChange: FunctionStringCallback }) {
        const [selected, setSelected] = useState('');
        useEffect(() => onChange(selected),[selected]);
    return (<Container $locked={locked}>
        {answers.map((ans) => <AnswerPickItem locked={locked} onCheck={() => !locked && setSelected(ans)} answer={ans} selected={ selected === ans } disabled={ans == answer}/>)}
    </Container>)
}