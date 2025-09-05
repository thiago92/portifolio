import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/userApi";
import { User } from "@/interface/user";


// Hook para listar usuários
export const useUsers = ( options?: any ) => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
    ...options,
  });
};
