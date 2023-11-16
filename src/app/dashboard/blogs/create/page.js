import PageHeading from "@/components/UI/PageHeading";
import CreateBlogForm from "../components/CreateBlogForm";

export default function page() {
  return (
    <div className="py-5">
      <PageHeading
        title="Create Blog"
        navigateTo={"/dashboard/blogs"}
        actionTitle="Back"
      />
      <CreateBlogForm />
    </div>
  );
}
