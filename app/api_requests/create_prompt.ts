import { AppConfig } from "~/config";
import type { Prompt } from "~/types/prompt";
import axiosInstance from "~/utils/axios";

export async function createPrompt(token: string, prompt: Prompt) {
    return await axiosInstance.post(
                `${AppConfig.baseUrl}/api/v1/prompts`, 
                prompt,
                { headers: {Authorization: `Bearer ${token}`} },
            );
}