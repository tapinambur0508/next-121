import axios, { AxiosError } from "axios";

export type APIError = AxiosError<{ error: string }>;

export const api = axios.create({
  baseURL: "https://next-v1-notes-api.goit.study",
});
