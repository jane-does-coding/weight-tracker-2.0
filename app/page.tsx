import Image from "next/image";
import HomePage from "./components/Home";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
	const currentUser = await getCurrentUser();

	return (
		<div className="">
			<HomePage currentUser={currentUser} />
		</div>
	);
}
