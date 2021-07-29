import axios from 'axios';
import { TMDB_API_KEY_V4 } from "../utils/constants";

export const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 5000,
  headers: {'Authorization': `Bearer ${TMDB_API_KEY_V4}`}
})

