import PageHeading from "@/components/UI/PageHeading";
import BlogList from "./components/BlogList";
import { headers } from "next/headers";
import { prisma } from "@/lib/prismaConfig";

const getBlogs = async () => {
  const headerList = headers();
  const user_id = parseInt(headerList.get("id"));
  const blogs = await prisma.blog.findMany({ where: { authorId: user_id } });
  return blogs;
};
export default async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-5 space-y-5">
      <PageHeading
        title="Create New Blog"
        navigateTo={"/dashboard/blogs/create"}
        actionTitle="Create New"
      />

      <BlogList data={blogs} />
    </div>
  );
}
