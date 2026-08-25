import type { Category } from "~/types/category";
import { createAppAsyncThunk } from "./hooks";
import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "~/utils/axios";

const initialState: {
    written_in: string,
    categories: Category[]
    loading: boolean,
    error: string|null|undefined,
} = {
    written_in: '',
    categories: [],
    loading: false,
    error: null,
};

export const getCategories = createAppAsyncThunk(
    'categories/get',
    async (_, {getState, rejectWithValue}) => {
        try {
            const { token, categories } = getState(); 
            if (!categories.written_in)
                return;
            const res = await axiosInstance.get(
                `/api/v1/prompts/categories?writtenIn=${categories.written_in}`, 
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
        condition: (_, { getState }) => !getState().categories.loading,
    }
)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    setWrittenIn: (state, action) => {state.written_in = action.payload},
  },
  extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
                state.categories = [];
                state.error = null;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
                state.error = null;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.categories = [];
                state.error = action.payload?.message ?? action.error?.message;
            })
    }
})

export const { setWrittenIn } = categoriesSlice.actions;