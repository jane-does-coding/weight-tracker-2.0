import getCurrentUser from "@/app/actions/getCurrentUser";
import getUserEntries from "@/app/actions/getUserEntries";
import Profile from "@/app/components/Profile/Profile";
import React from "react";

const page = async () => {
	const entries = await getUserEntries();
	const currentUser = await getCurrentUser();

	return (
		<div>
			<Profile entries={entries} user={currentUser} />
		</div>
	);
};

export default page;
