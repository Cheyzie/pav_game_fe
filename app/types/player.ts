export interface Player {
    nickname: string;
    score: number;
    is_ready: boolean;
    answered: boolean;
    voted: boolean
    connected: boolean
}

export interface PlayerResult {
    nickname: string;
    score: number;
    score_diff: number;
    answer: string|null;
    vote: string|null;
}

export interface FinalPlayerResult {
    nickname: string;
    score: number;
    position: number;
    connected: boolean
}