import type { Player } from "~/types/player";
import type { Room } from "~/types/room";
import PlayerBlock from "./player/player";
import { Container, Footer } from "./styles";
import { ColumnHeader } from "../common/styles";

export default function Roaster({ state, nickname, players }: { state: string, nickname: string, players: Player[]}) {
    return(<Container>
        <ColumnHeader>Roaster</ColumnHeader>
        {players?.map((el: Player) => <PlayerBlock state={state} player={el} is_me={el.nickname === nickname} />)}
        <Footer>
            offline players do not block the round
        </Footer>
    </Container>);
} 