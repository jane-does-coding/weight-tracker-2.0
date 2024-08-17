import getUserEntries from "@/app/actions/getUserEntries";
import Track from "@/app/components/Track/Track";
import React from "react";

const page = async () => {
	const entries = await getUserEntries();

	return (
		<div>
			<Track entries={entries} />
		</div>
	);
};

export default page;
