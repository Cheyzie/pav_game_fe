import { Container, ScoreBlock, SubtitleBlock, TitleBlock } from "./styles";

export function AnswerBlock({nickname, answer, votedBy}: {nickname: string, answer: string, votedBy: string[]}) {
    return (<Container>
        <div>
            <TitleBlock>{answer}</TitleBlock>
            <SubtitleBlock>{nickname} · {votedBy.length ? `fooled ${votedBy.join(', ')}` : 'nobody fell for it'}</SubtitleBlock>
        </div>
        <ScoreBlock $positive={votedBy.length > 0}>+{votedBy.length * 500}</ScoreBlock>
    </Container>)
}