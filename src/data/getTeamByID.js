import { prisma } from "@/lib/prismaConfig";

const getTeamByID = async (id) => {
  const blog = await prisma.team.findUnique({
    where: { id },
  });
  return blog;
};
export default getTeamByID;
