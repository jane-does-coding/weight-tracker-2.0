import getCurrentUser from "@/app/actions/getCurrentUser";
import Enter from "@/app/components/Enter/Enter";
import React from "react";

const page = async () => {
	const currentUser = await getCurrentUser();
	return (
		<div>
			<Enter currentUser={currentUser} />
		</div>
	);
};

export default page;
