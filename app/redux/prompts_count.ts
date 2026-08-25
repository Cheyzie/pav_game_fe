import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "./hooks";
import axiosInstance from "~/utils/axios";

const initialState: {
    count: number,
    loading: boolean,
    error: string|null|undefined,
} = {
    count: 0,
    loading: false,
    error: null,
};

export const getPromptsCount = createAppAsyncThunk(
    'promptsCount/get',
    async (_, {getState, rejectWithValue}) => {
        try {
            const { token } = getState(); 
            const res = await axiosInstance.get(
                '/api/v1/me/prompts-count', 
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
        condition: (_, { getState }) => !getState().promptsCount.loading,
    }
)

export const promptsCountSlice = createSlice({
  name: 'promptsCount',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
        builder
            .addCase(getPromptsCount.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPromptsCount.fulfilled, (state, action) => {
                state.loading = false;
                state.count = action.payload.count;
                state.error = null;
            })
            .addCase(getPromptsCount.rejected, (state, action) => {
                state.loading = false;
                state.count = 0;
                state.error = action.payload?.message ?? action.error?.message;
            })
    }
})