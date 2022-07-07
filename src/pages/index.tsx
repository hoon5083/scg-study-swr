import Profile from "components/Profile";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="grid min-h-screen gap-10 px-20 py-20 bg-slate-400">
			<Profile />
		</div>
	);
};

export default Home;
