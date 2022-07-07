import Profile from "components/Profile";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
import fetcher from "utils/fetcher";

const Home: NextPage = () => {
	return (
		<SWRConfig value={{ fetcher: fetcher }}>
			<div className="grid min-h-screen gap-10 px-20 py-20 bg-slate-400">
				<Profile id={1} />
				<Profile id={2} />
				<Profile id={3} />
			</div>
		</SWRConfig>
	);
};

export default Home;
