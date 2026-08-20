import { useRef } from "react";
import { Code, CodeBlock, Container, CopyButton, HeaderData, LeaveButton, StateBlock, StateItem, Timer, TimerBar, TimerBarFiller } from "./styles";

async function copyToClipboard(text:string) {
    if (!text)
        return;
    try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

export default function Header({ code, state, round, max_rounds, seconds_left, onLeave }: { code: string, state: string, round: number, max_rounds: number, seconds_left: number, onLeave: VoidFunction}) {
    const ref = useRef<HTMLInputElement>(null)
    return (
    <Container>
        <HeaderData>
            <CodeBlock>         
            <Code ref={ref}>{code} </Code>
            <CopyButton onClick={(e) => copyToClipboard(ref.current?.innerText ?? "")}>COPY</CopyButton>
            </CodeBlock>
            <StateBlock $warn={seconds_left<=10 && seconds_left > 0}>
                <StateItem>{state}</StateItem>
                <StateItem> · </StateItem>
                <StateItem>ROUND {round} OF {max_rounds}</StateItem>
                <Timer $warn={seconds_left<=10 && seconds_left > 0}>
                    {Math.trunc(seconds_left / 60)}
                    :{(seconds_left%60).toString().padStart(2, '0')}
                </Timer>
                <LeaveButton onClick={onLeave}>LEAVE</LeaveButton>
            </StateBlock>       
        </HeaderData>
        <TimerBar>
            <TimerBarFiller $left={Math.round(100*seconds_left / 60)} $warn={seconds_left<=10}/>
        </TimerBar>
      </Container>
    )
}