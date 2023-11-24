import { prisma } from "@/lib/prismaConfig";

const getBlogBySlug = async (slug) => {
  const blog = await prisma.blog.findUnique({
    where: { slug },
  });
  return blog;
};
export default getBlogBySlug;
