import styled from "styled-components";
import type { PlayerResult } from "~/types/player";
import { ScoreBlock } from "../../final/final_result/styles";
import { AnswerBlock } from "./answer_block.tsx/answer_block";

function answerVotedBy(nickname: string, results: PlayerResult[]): string[] {
    const answer = results.find(res => res.nickname == nickname)?.answer;
    if (!answer)
        return [];
    return results.filter(res => res.vote == answer).map(res => res.nickname);
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export function Answers({nickname, results}: {nickname: string, results: PlayerResult[]}) {
    return (<Container>
        {results.filter(res => res.answer ).map(res => <AnswerBlock nickname={res.nickname == nickname ? "YOURS" : res.nickname} answer={ res.answer ?? "" } votedBy={answerVotedBy(res.nickname, results)} />)}
    </Container>)
}