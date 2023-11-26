import Breadcrumb from "@/components/Breadcrumb";
import CreateBlogForm from "../components/CreateBlogForm";
const pages = [
  { name: "home", href: "/dashboard/blogs/", current: false },
  { name: "Create Blog", href: "/dashboard/blogs/create", current: true },
];
export default function page() {
  return (
    <div className="py-5">
      <Breadcrumb pages={pages} />
      <CreateBlogForm />
    </div>
  );
}
