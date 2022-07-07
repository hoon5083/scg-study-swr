import useSWR from "swr";
import { User } from "types/api";
import fetcher from "utils/fetcher";

export function useUser(id: number) {
	return useSWR<User>(`https://reqres.in/api/users/${id}`);
}
