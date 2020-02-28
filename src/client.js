import axios from "axios";
import { baseURL, TokenName } from "./utils/consts";

const client = axios.create({
  baseURL
});

client.interceptors.request.use(config => {
  let token;
  token = localStorage.getItem(TokenName);
  if (token) {
    config.headers.xixi = token;
  }
  return config;
});

client.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem(TokenName);
      return;
    }
    throw error;
  }
);

export const fetchIndex = () => client.get("game/index");

export const fetchGameGoodsList = params =>
  client.get("game/getGameGoodsList", params);
