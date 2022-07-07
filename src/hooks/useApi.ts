import axios from "axios";
import { useEffect, useState } from "react";
import { ApiResponse } from "types/api";

function useApi<T>(endpoint: string) {
	const [data, setData] = useState<T | null>(null);
	console.log("useApi");
	useEffect(() => {
		async function fetchData() {
			const res = await axios.get<ApiResponse<T>>(
				`https://reqres.in/api/${endpoint}`
			);
			setData(res.data.data);
		}
		fetchData();
	}, [endpoint]);

	return data;
}

export default useApi;
