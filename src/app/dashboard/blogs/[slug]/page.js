import getBlogBySlug from "@/data/getBlogBySlug";
import EditBlogForm from "../components/EditBlogForm";
import Breadcrumb from "@/components/Breadcrumb";

export default async function page({ params }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);
  const pages = [
    { name: "home", href: "/dashboard/blogs/", current: false },
    { name: `${blog.title}`, href: `/dashboard/blogs/${slug}`, current: true },
  ];
  return (
    <div className="py-5">
      <Breadcrumb pages={pages} />
      <EditBlogForm blog={blog} />{" "}
    </div>
  );
}
