import { Container } from "./styles";
import Final from "./final/final";
import Results from "./results/results";
import Lobby from "./lobby/lobby";
import type { Room } from "~/types/room";
import Vote from "./vote/vote";
import Lie from "./lie/lie";

export default function Game({ room, onSendAction }: { room: Room, onSendAction: (type:string, payload: string|null) => void }) {
    const ready = () => {
      onSendAction("ready", null);
    };
    
    const lie = (msg: string) => {
      if (!msg.trim()) return;
      onSendAction("lie", msg.trim());
    };

    const vote = (msg: string) => {
      if (!msg.trim()) return;
      onSendAction("vote", msg.trim());
    };

    const reset = () => {
      onSendAction("reset", null);
    };
    return (<Container>
        {room?.state === 'lobby' && <Lobby ready={room.is_ready} onReady={ready}/> }
        {room?.state === 'lie' && <Lie question={room.prompt ?? ""} lied={room.answered} onLie={lie}/> }
        {room?.state === 'voting' && <Vote question={room.prompt ?? ""} answer={room.answer ?? ""} answers={room.answers} voted={room.voted} onVote={vote}/> }
        {room?.state === 'result' && <Results nickname={room.nickname} truth={room.truth ?? ""} results={room.results}/> }
        {room?.state === 'finished' && <Final results={room.final_results} onReset={reset}/> }
    </Container>);
} 