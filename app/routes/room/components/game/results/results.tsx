import type { PlayerResult } from "~/types/player";
import styled from "styled-components";
import { Answers } from "./answers/answers";
import { Scores } from "./scores/scores";

export const Container = styled.div`
    flex: 1;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const AnswersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

export const Caption = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dim);
`;

export const TruthBlock = styled.div<{$correct: boolean}>`
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 30px;
    line-height: 1.05;
    margin-top: 8px;
    color: ${props => props.$correct ? 'var(--accent)' : 'var(--ink)'};
`;

function isMyAnswerCorrect(nickname: string, truth: string, results: PlayerResult[]): boolean {
    return results.find(res => res.nickname == nickname)?.vote === truth;
}

export default function Results({ nickname, truth, results }: { nickname: string, truth: string, results: PlayerResult[] }) {

    return (<>
        <Container>
            <AnswersContainer>
                <div>
                    <Caption>The real answer</Caption>
                    <TruthBlock $correct={isMyAnswerCorrect(nickname, truth, results)}>{truth}</TruthBlock>
                </div>
                <Answers nickname={nickname} results={results} />
            </AnswersContainer>
            <Scores results={results} />
        </Container>
    </>);
}