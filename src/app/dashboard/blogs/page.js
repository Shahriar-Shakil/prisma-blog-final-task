import { prisma } from "@/lib/prismaConfig";
import { headers } from "next/headers";
import BlogList from "./components/BlogList";
import Breadcrumb from "@/components/Breadcrumb";

const getBlogs = async () => {
  const headerList = headers();
  const user_id = parseInt(headerList.get("id"));
  const blogs = await prisma.blog.findMany({ where: { authorId: user_id } });
  return blogs;
};
const pages = [
  { name: "home", href: "/dashboard/blogs/", current: true },
  { name: "Create Blog", href: "/dashboard/blogs/create", current: false },
];
export default async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-5 space-y-5">
      <Breadcrumb pages={pages} />

      <BlogList data={blogs} />
    </div>
  );
}
