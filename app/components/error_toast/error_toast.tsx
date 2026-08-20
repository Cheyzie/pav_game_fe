import { Container, Description, Header } from "./styles";

export function RoomErrorToast({ closeToast, error }: {closeToast: VoidFunction, error: string}) {
    return (<Container>
        <Header>Error · toast</Header>
        <Description>{error}</Description>
    </Container>)
}