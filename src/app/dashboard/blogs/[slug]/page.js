import PageHeading from "@/components/UI/PageHeading";
import EditBlogForm from "../components/EditBlogForm";
import getBlogBySlug from "@/data/getBlogBySlug";

export default async function page({ params }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);
  return (
    <div className="py-5">
      <PageHeading
        title="Edit Blog"
        navigateTo={"/dashboard/blogs"}
        actionTitle="Back"
      />
      <EditBlogForm blog={blog} />{" "}
    </div>
  );
}
