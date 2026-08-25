import type { Message } from "./message";
import type { FinalPlayerResult, Player, PlayerResult } from "./player";

export interface Room {
    code: string;
    nickname: string;
    prompts_written_in: string;
    max_rounds: number;
    round: number;
    state: string;
    phase_ends_in_ms: number|null;
    players: Player[];
    messages: Message[];
    prompt: string | null;
    truth: string | null;
    answers: string[];
    is_ready: boolean;
    answer: string | null;
    answered: boolean;
    vote: string | null;
    voted: boolean;
    results: PlayerResult[];
    final_results: FinalPlayerResult[];
}
