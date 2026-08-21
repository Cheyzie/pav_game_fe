import { useEffect, useRef, useState } from "react";
import { Caption, LabelContainer, LabelItem, LieInput } from "./styles";
import { GameButton, Title, TitleGroup } from "../../common/styles";

const LIE_LENGTH = 120;

export default function Lie({ question, lied, onLie }: { question: string, lied: boolean, onLie: (msg: string) => void }) {
    const [lie, setLie] = useState('');
    const conterRef = useRef<HTMLDivElement>(null);
    useEffect(() => { 
        conterRef.current?.setHTMLUnsafe(lie.length + "/" + LIE_LENGTH);
    })
    return (<>
        <TitleGroup>
            <Caption>The situation</Caption>
            <Title>{question}</Title>
            <LieInput id="lie" value={lie} onChange={e => setLie(e.target.value.slice(0, LIE_LENGTH))}/>
            <LabelContainer>
                <LabelItem $warn={false}>bob and carla answered</LabelItem>
                <LabelItem $warn={lie.length >= LIE_LENGTH} ref={conterRef}>0/120</LabelItem>
            </LabelContainer>
        </TitleGroup>
        <GameButton $validated={lie.length > 0} $locked={lied} onClick={() => { !lied && (lie.length > 0) && onLie(lie)}}>{ lied ? 'LIE LOCKED' : 'SUBMIT LIE'}</GameButton>
    </>);
}