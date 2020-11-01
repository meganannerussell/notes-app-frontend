import axios from "axios";
import { apiBaseUrl } from "./App";

export const getNotes = async () => {
  const response = await axios.get(`${apiBaseUrl}/notes`);
  const notes = await response.data;
  return notes;
};
