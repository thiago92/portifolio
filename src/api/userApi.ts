import { User } from "@/interface/user";
import api from "./axios";


export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get("/users");
  return data;
};

export const getUserById = async (id: string): Promise<User> => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export const createUser = async (user: Omit<User, "id" | "created_at">): Promise<User> => {
  const { data } = await api.post("/users", user);
  return data;
};

export const updateUser = async (id: string, user: Partial<User>): Promise<User> => {
  const { data } = await api.put(`/users/${id}`, user);
  return data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await api.delete(`/users/${id}`);
};
