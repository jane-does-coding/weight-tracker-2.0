import React from "react";

interface Entry {
	id: string;
	weight: number;
	createdAt: string;
}

interface TrackProps {
	entries: Entry[];
}

const Track = ({ entries }: any) => {
	return (
		<div className="p-4 space-y-4">
			<h1 className="text-neutral-200 mx-auto text-center mt-4 mb-4 text-[2rem]">
				Track
			</h1>
			{entries.map((entry: any) => (
				<div
					key={entry.id}
					className="flex justify-between p-4 bg-gray-100 rounded-lg shadow-md"
				>
					<p className="text-sm font-medium text-gray-600">
						{new Date(entry.createdAt).toLocaleDateString()}
					</p>
					<p className="text-lg font-bold text-gray-800">{entry.weight} kg</p>
				</div>
			))}
		</div>
	);
};

export default Track;
