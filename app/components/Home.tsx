import React from "react";
import LogoutBtn from "./LogoutBtn";

const HomePage = ({ currentUser }: any) => {
	return (
		<div className="w-full min-h-screen items-center justify-center flex">
			<div className="w-full relative flex flex-col gap-2">
				{currentUser ? (
					<>
						<LogoutBtn />
						<a
							href="/profile"
							className="w-[90vw] mx-auto bg-slate-700 hover:bg-slate-600 transition text-white flex items-center justify-center rounded-md py-1"
						>
							Profile
						</a>
					</>
				) : (
					<>
						<a
							href="/login"
							className="w-[90vw] mx-auto bg-slate-700 hover:bg-slate-600 transition text-white flex items-center justify-center rounded-md py-1"
						>
							Login
						</a>
						<a
							href="/register"
							className="w-[90vw] mx-auto bg-slate-700 hover:bg-slate-600 transition text-white flex items-center justify-center rounded-md py-1"
						>
							Register
						</a>
					</>
				)}
				<a
					href="/enter"
					className="w-[90vw] mx-auto bg-slate-700 hover:bg-slate-600 transition text-white flex items-center justify-center rounded-md py-1"
				>
					Enter
				</a>
				<a
					href="/track"
					className="w-[90vw] mx-auto bg-slate-700 hover:bg-slate-600 transition text-white flex items-center justify-center rounded-md py-1"
				>
					Track
				</a>
			</div>
		</div>
	);
};

export default HomePage;
