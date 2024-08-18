import React from "react";

interface Entry {
	id: string;
	weight: number;
	createdAt: string;
}

interface ProfileProps {
	entries: Entry[];
}

const Profile = ({ entries, user }: any) => {
	const weights = entries.map((entry: any) => entry.weight);

	const lowestWeight = Math.min(...weights);
	const highestWeight = Math.max(...weights);
	const averageWeight = (
		weights.reduce((acc: any, weight: any) => acc + weight, 0) / weights.length
	).toFixed(2);
	const overallChange =
		entries.length > 1
			? entries[entries.length - 1].weight - entries[0].weight
			: 0;
	const trend =
		overallChange > 0
			? "Increase"
			: overallChange < 0
			? "Decrease"
			: "No Change";

	return (
		<div className="p-6 space-y-6 bg-slate-800 rounded-lg shadow-md">
			<h2 className="text-2xl font-bold text-center">Profile Summary</h2>
			<div className="flex items-center justify-between px-2">
				<h2 className="text-neutral-300 font-light">Username:</h2>
				<h2>{user.username}</h2>
			</div>
			<div className="flex items-center justify-between px-2">
				<h2 className="text-neutral-300 font-light">Name:</h2>
				<h2>{user.name}</h2>
			</div>
			<div className="flex items-center justify-between px-2">
				<h2 className="text-neutral-300 font-light">Email:</h2>
				<h2>{user.email}</h2>
			</div>
			<div className="flex flex-col gap-4">
				<div className="bg-slate-700 border-4 border-slate-800 p-4 rounded-lg text-center">
					<h3 className="text-md font-light text-neutral-300 ">
						Lowest Weight
					</h3>
					<p className="text-2xl font-bold text-neutral-200">
						{lowestWeight} kg
					</p>
				</div>

				<div className="bg-slate-700 border-4 border-slate-800 p-4 rounded-lg text-center">
					<h3 className="text-md font-light text-neutral-300 ">
						Highest Weight
					</h3>
					<p className="text-2xl font-bold text-neutral-200">
						{highestWeight} kg
					</p>
				</div>

				<div className="bg-slate-700 border-4 border-slate-800 p-4 rounded-lg text-center">
					<h3 className="text-md font-light text-neutral-300 ">
						Average Weight
					</h3>
					<p className="text-2xl font-bold text-neutral-200">
						{averageWeight} kg
					</p>
				</div>

				<div className="bg-slate-700 border-4 border-slate-800 p-4 rounded-lg text-center">
					<h3 className="text-md font-light text-neutral-300 ">
						Overall Change
					</h3>
					<p
						className={`text-2xl font-bold ${
							overallChange > 0 ? "text-neutral-200" : "text-neutral-200"
						}`}
					>
						{overallChange} kg
					</p>
					<p className="text-sm text-neutral-200">{trend}</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
