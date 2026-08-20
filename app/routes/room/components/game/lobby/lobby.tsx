
import { GameButton, Title, TitleGroup } from "../../common/styles";
import { Subtitle } from "./styles";

export default function Lobby({ ready, onReady }: { ready: boolean, onReady: VoidFunction }) {
    return (<>
        <TitleGroup>
            <Title>waiting on you</Title>
            <Subtitle>All ready players start the game. Eight rounds, 60 seconds to lie, 60 to vote.</Subtitle>
        </TitleGroup>
        <GameButton $validated={true} $locked={ready} onClick={onReady}>{ ready ? 'READY' : "I'M READY"}</GameButton>
    </>);
}