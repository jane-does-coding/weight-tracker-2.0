"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutBtn = () => {
	return (
		<div>
			<button
				className="w-[90vw] mx-auto bg-slate-700 hover:bg-slate-600 transition text-white flex items-center justify-center rounded-md py-1"
				onClick={() => signOut()}
			>
				Logout
			</button>
		</div>
	);
};

export default LogoutBtn;
