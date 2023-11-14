import PageHeading from "@/components/UI/PageHeading";
import BlogList from "./components/BlogList";

export default function page() {
  return (
    <div className="py-5">
      <PageHeading
        title="Create New Blog"
        navigateTo={"/dashboard/blogs/create"}
      />
      <BlogList />
    </div>
  );
}
