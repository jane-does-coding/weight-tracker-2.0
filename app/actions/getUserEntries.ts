import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getUserEntries() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) {
			return null;
		}
		const userEntries = await prisma.entry.findMany({
			where: {
				userId: currentUser.id,
			},
		});

		return userEntries;
	} catch (err: any) {
		return null;
	}
}
