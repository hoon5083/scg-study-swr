import { User } from "types/api";
import DetailAxios from "./DetailAxios";

function ProfileAxios({ data }: { data: User | null }) {
	return (
		<div className="overflow-hidden bg-white shadow-xl rounded-3xl">
			<div className="p-6 bg-blue-500 pb-14">
				<span className="text-2xl text-white">Profile</span>
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
				<DetailAxios data={data} />
			</div>
		</div>
	);
}

export default ProfileAxios;
