import { useState } from "react";
import { AnswerPick } from "./answer_pick/answer_pick";
import { GameButton, Title, TitleGroup } from "../../common/styles";

export default function Vote({ question, answer, answers, voted, onVote }: { question: string, answer:string, answers: string[], voted: boolean, onVote: (msg: string) => void }) {
    const [vote, setVote] = useState('');
    return (<>
        <TitleGroup>
            <Title>{question}</Title>
            <AnswerPick locked={voted} answers={answers} answer={answer} onChange={setVote}/>
        </TitleGroup>
        <GameButton $validated={vote.length > 0} $locked={voted} onClick={() => { !voted && (vote.length > 0) && onVote(vote)}}>{ voted ? 'VOTE LOCKED' : 'LOCK IN VOTE'}</GameButton>
    </>);
}