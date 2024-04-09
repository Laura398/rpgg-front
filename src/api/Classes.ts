import axios from 'axios';

export async function getAllClasses() {
  const classes = await axios.get<any[]>('/classes');
  return classes.data;
}