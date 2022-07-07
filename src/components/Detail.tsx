import { useUser } from "hooks/useUser";
import useSwr from "swr";
import { User } from "types/api";
import fetcher from "utils/fetcher";

function Detail() {
	const { data } = useUser(2);

	return (
		<div className="p-6 my-4 bg-white border-2 border-black shadow-xl rounded-3xl">
			<div className="flex flex-col">
				<span className="text-xl font-medium">{data?.first_name}</span>
				<span className="text-xs text-gray-500">{data?.last_name}</span>
				<div className="flex items-center justify-between mt-3 mb-5">
					<div className="space-x-2">
						<button className="w-5 h-5 transition bg-yellow-500 rounded-full focus:ring-2 ring-offset-2 ring-yellow-500" />
						<button className="w-5 h-5 transition bg-indigo-500 rounded-full focus:ring-2 ring-offset-2 ring-indigo-500" />
						<button className="w-5 h-5 transition bg-teal-500 rounded-full focus:ring-2 ring-offset-2 ring-teal-500" />
					</div>
					<div className="flex items-center space-x-5">
						<button className="flex items-center justify-center w-8 text-xl text-gray-500 bg-blue-200 rounded-lg aspect-square">
							-
						</button>
						<span>1</span>
						<button className="flex items-center justify-center w-8 text-xl text-gray-500 bg-blue-200 rounded-lg aspect-square">
							+
						</button>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-2xl font-medium">{data?.email}</span>
					<button className="px-8 py-2 text-xs text-center text-white bg-blue-500 rounded-lg">
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default Detail;
