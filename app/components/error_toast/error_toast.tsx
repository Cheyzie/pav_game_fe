import type { ToastOptions } from "react-toastify";
import { Container, Description, Header } from "./styles";

export function ErrorToast({ data }: ToastOptions<any>) {
    return (<Container>
        <Header>Error · toast</Header>
        <Description>{data.error}</Description>
    </Container>)
}