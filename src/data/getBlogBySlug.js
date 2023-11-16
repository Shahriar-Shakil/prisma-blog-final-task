import { PrismaClient } from "@prisma/client";

const getBlogBySlug = async (slug) => {
  const prisma = new PrismaClient();
  const blog = await prisma.blog.findUnique({
    where: { slug },
  });
  return blog;
};
export default getBlogBySlug;
