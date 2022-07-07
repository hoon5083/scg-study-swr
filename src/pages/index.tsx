import ProfileAxios from "components/ProfileAxios";
import useApi from "hooks/useApi";
import type { NextPage } from "next";
import { User } from "types/api";

const Home: NextPage = () => {
	const data = useApi<User>("users/2");
	return (
		<div className="grid min-h-screen gap-10 px-20 py-20 bg-slate-400">
			<ProfileAxios data={data} />
		</div>
	);
};

export default Home;
