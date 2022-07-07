import ProfileAxios from "components/ProfileAxios";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="grid min-h-screen gap-10 px-20 py-20 bg-slate-400">
			<ProfileAxios />
		</div>
	);
};

export default Home;
