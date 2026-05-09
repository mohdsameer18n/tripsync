import axios from "axios";

const API = axios.create({
    baseURL: "https://tripsync-0sg6.onrender.com"
});

export default API;