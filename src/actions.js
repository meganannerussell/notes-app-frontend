import axios from "axios";

export const getNotes = async()=>{
  const response = await axios.get('http://localhost:5000/notes')
  const notes = await response.data
  return notes
}