import type { Player } from "~/types/player"
import { PlayerContainer, Nickname, Score } from "./styles";

export default function PlayerBlock({state, player, is_me}: {state:string, player: Player, is_me: boolean}) {
    let playerState = "";
    if (player.answered && state == 'lie') {
        playerState = "lied";
    } else if (player.voted && state == 'voting') {
        playerState = "voted";
    } else if (player.is_ready && state == 'lobby') {
        playerState = "ready";
    }
    return (<PlayerContainer $is_me={is_me} $connected={player.connected}>
        <Nickname>{player.nickname}<span>{playerState}</span></Nickname>
        <Score>{player.score}</Score>
    </PlayerContainer>)
}