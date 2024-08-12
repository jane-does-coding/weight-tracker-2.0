"use client";
import React, { useState } from "react";

const Enter = ({ currentUser }: any) => {
	const [weight, setWeight] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!weight) return;

		try {
			const response = await fetch("/api/entries", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					weight: parseInt(weight),
					userId: currentUser.id,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to create entry");
			}

			/* Redirect? */ setWeight("");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Weight:
					<input
						type="number"
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Create Entry</button>
			</form>
		</div>
	);
};

export default Enter;
