import type { ToastOptions } from "react-toastify";
import { Container, Description, Header } from "./styles";

export function InfoToast({ data }: ToastOptions<any>) {
    return (<Container>
        <Header>{data.type} · toast</Header>
        <Description>{data.message}</Description>
    </Container>)
}