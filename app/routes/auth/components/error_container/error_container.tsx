import { Container, Content, Header } from "./styles";

export function ErrorContainer({content}: {content: string}) {
    return (<Container>
        <Header>Sign in failed</Header>
        <Content>{content}</Content>
    </Container>);
}