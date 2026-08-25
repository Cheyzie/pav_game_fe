import { createSlice} from "@reduxjs/toolkit";
import axios, { type AxiosResponse } from "axios";
import type { User } from "~/types/user";
import { createAppAsyncThunk } from "./hooks";
import axiosInstance from "~/utils/axios";

export const getMe = createAppAsyncThunk(
    'user/getMe',
    async (_, {getState, rejectWithValue}) => {
        try {
            const { token } = getState(); 
            if (!token.accessToken)
                return;
            const res = await axiosInstance.get(
                "/api/v1/me", 
                { headers: {Authorization: `Bearer ${token.accessToken}`} }
            )
            return res.data
        } catch (error: any) {
            return rejectWithValue(error.Error)
        }
    },
    {
        // Drop the dispatch if a request is already in flight (StrictMode
        // double-mount, remounts, repeated clicks). `pending` sets loading
        // synchronously, so the second dispatch is aborted before it fires.
        condition: (_, { getState }) => !getState().user.loading,
    }
)

const initialState: {loading: boolean, user: User|null, error: string|null|undefined}  = {loading: false, user: null, error: null}
export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        cleanUser:  state => {state.user = null},
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMe.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload
            })
            .addCase(getMe.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.error?.message;
            })
    }
})

export const { cleanUser } = userSlice.actions