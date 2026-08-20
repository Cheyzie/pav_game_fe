import type { PlayerResult } from "~/types/player";
import { Title, Container } from "./styles";
import { ScoreBlock } from "./score_block/score_block";

export function Scores({results}: {results: PlayerResult[]}) {
    return (<Container>
        <Title>Scores</Title>
        {results.map( res => <ScoreBlock result={res} /> )}
    </Container>)
}