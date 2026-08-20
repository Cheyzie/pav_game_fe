import type { FinalPlayerResult } from "~/types/player";
import { Container, NicknameBlock, PositionBlock, ScoreBlock } from "./styles";

export default function FinalResult({ result }: { result: FinalPlayerResult }) {
    return (<Container $connected={result.connected} $position={result.position}>
        <PositionBlock $position={result.position}>{result.position}</PositionBlock>
        <NicknameBlock $position={result.position}>{result.nickname}</NicknameBlock>
        <ScoreBlock $position={result.position}>{result.score}</ScoreBlock>
    </Container>);
}