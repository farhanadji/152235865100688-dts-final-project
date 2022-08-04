import axios from "axios";

const baseUrl = "https://shazam.p.rapidapi.com/";
const API_KEY = process.env.API_KEY;

const basicService = axios.create({
  baseURL: baseUrl,
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
});

export default basicService;
