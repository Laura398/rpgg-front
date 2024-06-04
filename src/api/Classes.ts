import axios from "axios";

export async function getAllClasses() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const classes = await axios.get<any[]>("/classes");
  return classes.data;
}
