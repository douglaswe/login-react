import axios from "axios";

export const api = axios.create({
  baseURL: "", //colocar url do servidor
});

export const createSession = async (email, password) => {
  return api.post("/session", { email, password });
};
