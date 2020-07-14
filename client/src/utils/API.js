import axios from "axios";

const API = axios.create({
  baseURL: "https://us-central1-react-shop-4dfbc.cloudfunctions.net/app/api",
});

export default API;
