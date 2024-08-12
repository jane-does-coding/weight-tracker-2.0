import React from "react";
import LogoutBtn from "./LogoutBtn";

const HomePage = () => {
	return (
		<div className="w-full min-h-screen items-center justify-center flex">
			<div className="w-full relative flex flex-col gap-2">
				<a
					href="/"
					className="w-[90vw] mx-auto bg-slate-700 hover:bg-slate-600 transition text-white flex items-center justify-center rounded-md py-1"
				>
					Login
				</a>
				<a
					href="/"
					className="w-[90vw] mx-auto bg-slate-700 hover:bg-slate-600 transition text-white flex items-center justify-center rounded-md py-1"
				>
					Register
				</a>
				<a
					href="/"
					className="w-[90vw] mx-auto bg-slate-700 hover:bg-slate-600 transition text-white flex items-center justify-center rounded-md py-1"
				>
					Enter
				</a>
				<a
					href="/"
					className="w-[90vw] mx-auto bg-slate-700 hover:bg-slate-600 transition text-white flex items-center justify-center rounded-md py-1"
				>
					Track
				</a>
				<LogoutBtn />
			</div>
		</div>
	);
};

export default HomePage;
