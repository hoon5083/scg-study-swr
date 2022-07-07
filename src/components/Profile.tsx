import { NextComponentType, NextPage } from "next";
import useSwr from "swr";
import { User } from "types/api";
import fetcher from "utils/fetcher";
import Detail from "./Detail";
import DetailAxios from "./DetailAxios";

const Profile: NextComponentType = () => {
	const { data, error } = useSwr<User>(
		"https://reqres.in/api/users/2",
		fetcher
	);
	return (
		<div className="overflow-hidden bg-white shadow-xl rounded-3xl">
			<div className="p-6 bg-blue-500 pb-14">
				<span className="text-2xl text-white">Profil</span>
			</div>
			<div className="relative p-6 bg-white rounded-3xl -top-5">
				<div className="relative flex items-end justify-between -top-16">
					<div className="flex flex-col items-center">
						<span className="text-xs text-gray-500">Orders</span>
						<span className="font-medium">340</span>
					</div>
					<div className="w-24 h-24 rounded-full bg-zinc-400" />
					<div className="flex flex-col items-center">
						<span className="text-xs text-gray-500">Spent</span>
						<span className="font-medium">$340</span>
					</div>
				</div>
				<div className="relative flex flex-col items-center mb-4 -mt-14">
					<span className="text-lg font-medium">{data?.first_name}</span>
					<span className="text-sm text-gray-500">{data?.last_name}</span>
				</div>
				<Detail />
			</div>
		</div>
	);
};

export default Profile;
