import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "./hooks";
import axiosInstance from "~/utils/axios";
import type { Room } from "~/types/room";
import { AppConfig } from "~/config";
const initialState: {
    room: Room, 
    token: string|null,
    loading: boolean,
    error: string|null|undefined
} = {
    room: {
        code: "", 
        nickname: "", 
        max_rounds: 1,
        round: 1,
        state: "lobby",
        phase_ends_in_ms: null,
        players: [],
        messages: [],
        prompt: null,
        truth: null,
        answers: [],
        is_ready: false,
        answer: null,
        answered: false,
        vote: null,
        voted: false,
        results: [],
        final_results: [],
    },
    token: null,
    loading: false,
    error: null,
};
export const joinRoom = createAppAsyncThunk(
    'room/join',
    async (conn: {code: string, nickname: string}, {getState, rejectWithValue}) => {
        try {
            const { token } = getState(); 
            const res = await axiosInstance.post(
                `${AppConfig.baseUrl}/api/v1/rooms/${conn.code}/join`, 
                {nickname: conn.nickname},
                { headers: {Authorization: `Bearer ${token.accessToken}`} }
            )
            return {...res.data, code: conn.code}
        } catch (error: any) {
            const message = error.response?.data?.message || error.message || 'Something went wrong';
            return rejectWithValue(message);
        }
    }
)

export const createRoom = createAppAsyncThunk(
    'room/create',
    async (_, {getState, rejectWithValue}) => {
        try {
            const { token } = getState(); 
            const res = await axiosInstance.post(
                `${AppConfig.baseUrl}/api/v1/rooms`, 
                {},
                { headers: {Authorization: `Bearer ${token.accessToken}`} }
            )
            if (res.status == 401) {
                rejectWithValue(res.data)
            }
            return res.data
        } catch (error: any) {
            rejectWithValue(error.Error)
        }
    }
)

export const roomSlice = createSlice({
    name: "room",
    initialState: initialState,
    reducers: {
        leave: state => {
            state.room.code = "";
            state.token = null;
            state.room.nickname = "";
        },
        setRoomCode: (state, action) => {
            state.room.code = action.payload;
        },
        setRoomToken: (state, action) => {
            state.token = action.payload;
        },
        setAnswer: (state, action) => {
            state.room.answer = action.payload;
        },
        addMessage: (state, action) => {
            state.room.messages.push(action.payload);
        },
        playerDisconnected: (state, action) => {
            state.room.players = state.room.players.map(p => action.payload.nickname == p.nickname ? {...p, connected: false, is_ready: false} : p);
        },
        playerConnected: (state, action) => {
            state.room.players = state.room.players.filter(p => action.payload.nickname != p.nickname);
            state.room.players.push(action.payload)
        },
        setRoomState: (state, action) => {
            state.room.code = action.payload.code;
            state.room.nickname = action.payload.nickname;
            state.room.is_ready = action.payload.is_ready;
            state.room.answered = action.payload.answered;
            state.room.voted = action.payload.voted;
            state.room.players = action.payload.players ?? [];
            state.room.messages = action.payload.messages ?? [];
            state.room.answers = action.payload.answers;
            state.room.state = action.payload.state;
            state.room.phase_ends_in_ms = action.payload.phase_ends_in_ms
            state.room.max_rounds = action.payload.max_rounds;
            state.room.round = action.payload.round;
            state.room.results = action.payload.results ?? [];
            state.room.final_results = action.payload.final_results ?? [];
        },
        gameWaiting: (state) => {
            state.room.state = "lobby";
            state.room.round = state.room.round + 1;
            state.room.is_ready = false
            state.room.answered = false;
            state.room.voted = false;
            state.room.players = state.room.players.map( p => {return {...p, answered: false, voted: false, is_ready: false}});
            state.room.answers = [];
            state.room.phase_ends_in_ms = null;
            state.room.results = [];
            state.room.final_results = [];
        },
        playerReady: (state, action) => {
            state.room.players = state.room.players.map(p => action.payload.nickname == p.nickname ? {...p, is_ready: true} : p);
            if (action.payload.nickname === state.room.nickname)
                state.room.is_ready = true;
        },
        gameStarted: (state, action) => {
            state.room.state = "lie";
            state.room.prompt = action.payload.prompt;
            state.room.phase_ends_in_ms = 60000;
        },
        playerLied: (state, action) => {
            state.room.players = state.room.players.map(p => action.payload.nickname == p.nickname ? {...p, answered: true} : p);
            if (action.payload.nickname === state.room.nickname)
                state.room.answered = true;
        },
        votingStarted: (state, action) => {
            state.room.state = "voting";
            state.room.answers = action.payload.answers;
            state.room.phase_ends_in_ms = 60000;
        },
        playerVoted: (state, action) => {
            state.room.players = state.room.players.map(p => action.payload.nickname == p.nickname ? {...p, voted: true} : p);
            if (action.payload.nickname === state.room.nickname)
                state.room.voted = true;
        },
        roundOver: (state, action) => {
            state.room.state = "result";
            state.room.truth = action.payload.truth
            state.room.results = action.payload.results
            state.room.players = 
            state.room.players.map(p => {
                return {
                    ...p, 
                    score: 
                        p.score + (state.room.results.find((res) => res.nickname == p.nickname)?.score_diff ?? 0)
                }
            });
            state.room.phase_ends_in_ms = 15000;
        },
        gameOver: (state, action) => {
            state.room.state = "finished";
            state.room.final_results = action.payload.final_results ?? []
            state.room.phase_ends_in_ms = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(joinRoom.pending, (state) => {
                state.loading = true;
            })
            .addCase(joinRoom.fulfilled, (state, action) => {
                state.loading = false;
                state.room.nickname = action.payload.nickname;
                state.token = action.payload.token;
                state.room.code = action.payload.code
            })
            .addCase(joinRoom.rejected, (state, action) => {
                state.loading = false;
                state.token = null;
                state.room.code = ""
                console.log(action)
                state.error = action.payload?.message
                
            })
            .addCase(createRoom.pending, (state) => {
                state.loading = true;
            })
            .addCase(createRoom.fulfilled, (state, action) => {
                state.loading = false;
                state.room.code = action.payload.code;
            })
            .addCase(createRoom.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message;
            })             
    }
  })

  export const { 
    leave, 
    addMessage, 
    setRoomState, 
    playerDisconnected, 
    playerConnected, 
    setRoomCode, 
    setRoomToken,
    gameWaiting, 
    playerReady, 
    gameStarted,
    playerLied,
    votingStarted,
    playerVoted,
    roundOver,
    gameOver,
    setAnswer,
} = roomSlice.actions;