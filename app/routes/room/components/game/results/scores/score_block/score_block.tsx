import type { PlayerResult } from "~/types/player";
import { Container, NicknameBlock, ScoresContainer, ScoresDiff, TotalScore } from "./styles";

export function ScoreBlock({result}: {result: PlayerResult}) {
    return (
        <Container>
            <NicknameBlock>{result.nickname}</NicknameBlock>
            <ScoresContainer>
                <ScoresDiff $positive={result.score_diff > 0}>+{result.score_diff}</ScoresDiff>
                <TotalScore>{result.score}</TotalScore>
            </ScoresContainer>
        </Container>
    )
}