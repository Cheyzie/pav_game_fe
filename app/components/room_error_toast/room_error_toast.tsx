import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { leave } from "~/redux/room";
import { BackHomeButton, Container } from "./styles";
import { Subtitle, Title } from "../styles";


export function RoomErrorToast({ closeToast }: {closeToast: VoidFunction}) {
    const dispatch = useDispatch();
    const nav = useNavigate()
    const backHome = () => {
        dispatch(leave());
        nav('/');
        closeToast();
    };
    return (<Container>
        <Title>This room is gone</Title>
        <Subtitle>Rooms close five minutes after the last player leaves. Ask for a new code.</Subtitle>
        <BackHomeButton onClick={backHome}>BACK HOME</BackHomeButton>
    </Container>)
}