// The API reports failures as `{ message: string }` in the response body;
// fall back to the transport-level message when there is no body (network

import axios from "axios";

// down, CORS, timeout).
export const extractError = (error: unknown): { message: string } => {
    if (axios.isAxiosError(error)) {
        return { message: error.response?.data?.message || error.message };
    }
    return { message: error instanceof Error ? error.message : 'Something went wrong' };
};