import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from './hooks';
import axios from 'axios';
import axiosInstance from '~/utils/axios';
import { getBrowserName } from '~/routes/auth/utils/get_browser_name';
import { extractError } from '~/routes/room/utils/extrat_error';
import { AppConfig } from '~/config';



export const refreshTokens = createAppAsyncThunk(
    'token/refreshTokens',
    async (_, {getState, rejectWithValue}) => {
        try {
            const { token } = getState(); 
            const res = await axios.post(
                `${AppConfig.baseUrl}/api/v1/refresh`, 
                {refresh_token: token.refreshToken}
            );
            return res.data;
        } catch (error) {
            return rejectWithValue(extractError(error));
        }
    }
)

export const login = createAppAsyncThunk(
    'token/login',
    async (creds: {email: string, password: string}, {rejectWithValue}) => { 
        try {
            const res = await axios.post(
                `${AppConfig.baseUrl}/api/v1/signin`, 
                {email: creds.email, password: creds.password, session_name: getBrowserName()}
            );
            return res.data;
        } catch (error) {
            return rejectWithValue(extractError(error));
        }
    }
)

export const signOut = createAppAsyncThunk(
    'token/logout',
    async (_, {getState, rejectWithValue}) => {
        try {
            const { token } = getState(); 
            const res = await axiosInstance.delete(
                "/api/v1/logout", 
                { headers: {Authorization: `Bearer ${token.accessToken}`} }
            )
            return res.data
        } catch (error) {
            return rejectWithValue(extractError(error));
        }
    }
)

const initialState: {
    accessToken: string|null,
    refreshToken: string|null,
    loading: boolean,
    error: string|null|undefined
} = {
        accessToken: null,
        refreshToken: null,
    loading: false,
    error: null
  }
export const tokenSlice = createSlice({
  name: 'token',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
          builder
              .addCase(refreshTokens.pending, (state) => {
                  state.loading = true;
                  state.error = null;
              })
              .addCase(refreshTokens.fulfilled, (state, action) => {
                  state.loading = false;
                  state.accessToken = action.payload.access_token;
                  state.refreshToken = action.payload.refresh_token;
              })
              .addCase(refreshTokens.rejected, (state, action) => {
                  state.loading = false;
                  state.error = action.payload?.message ?? action.error?.message;
              })
              .addCase(login.pending, (state) => {
                  state.loading = true;
                  state.error = null;
              })
              .addCase(login.fulfilled, (state, action) => {
                  state.loading = false;
                  state.accessToken = action.payload.access_token;
                  state.refreshToken = action.payload.refresh_token;
              })
              .addCase(login.rejected, (state, action) => {
                  state.loading = false;
                  state.error = action.payload?.message ?? action.error?.message;
              })
              .addCase(signOut.pending, (state) => {
                  state.loading = true;
                  state.error = null;
              })
              .addCase(signOut.fulfilled, (state, _) => {
                  state.loading = false;
                  state.accessToken = null;
                  state.refreshToken = null;
              })
              .addCase(signOut.rejected, (state, action) => {
                  state.loading = false;
                  state.error = action.payload?.message ?? action.error?.message;
              })
      }
})