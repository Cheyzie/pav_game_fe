import { Container, Sign, Subtitle, TextBlock, Title } from "./styles";

export function CreatePromptButton({ yourPromptsCount, onClick }: { yourPromptsCount: number, onClick: VoidFunction }) {
    return (<Container onClick={onClick}>
        <TextBlock>
            <Title>Write a prompt</Title>
            <Subtitle>{yourPromptsCount} in the pool</Subtitle>
        </TextBlock>
        <Sign>+</Sign>
    </Container>);
}