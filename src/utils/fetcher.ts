//데이터 가져오기 function
import axios from "axios";

const fetcher = async (url: string) => {
	const resp = await axios.get(url);
	console.log("fetcher");
	return resp.data.data;
};

export default fetcher;
