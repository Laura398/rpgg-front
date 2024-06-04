import axios from "axios";
import { User } from "../types/User.type";

export async function register(body: {
  email: string;
  username: string;
  password: string;
}) {
  const res = await axios.post<User>("/auth/register", body);
  return res.data;
}

export async function signIn(body: { email: string; password: string }) {
  const res = await axios.post<{ accessToken: string; refreshToken: string }>(
    "/auth/login",
    body
  );
  return res.data;
}

export async function refreshToken() {
  const res = await axios.post<{ accessToken: string; refreshToken: string }>(
    "/auth/refresh-token"
  );
  return res.data;
}

export async function logout() {
  await axios.post("/auth/logout");
}

export async function checkToken() {
  try {
    const res = await axios.get("/auth/check-token");
    return res.data;
  } catch (e: unknown) {
    console.log("e", e);
    return false;
  }
}
