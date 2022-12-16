import axios from "axios";

export const api = "http://localhost:8080";

const token = localStorage.getItem("token");
export const instance = axios.create({
  baseURL: api,
  headers: { Authorization: token ? "Bearer " + token : " " },
});
