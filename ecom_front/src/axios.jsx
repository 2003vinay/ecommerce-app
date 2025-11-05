import axios from "axios";

const API = axios.create({
  baseURL: "https://super-sniffle-jjrvgrwg4jxcpq4r-8080.app.github.dev/",
});
delete API.defaults.headers.common["Authorization"];
export default API;
