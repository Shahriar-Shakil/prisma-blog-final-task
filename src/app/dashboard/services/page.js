import Breadcrumb from "@/components/Breadcrumb";
const pages = [
  { name: "home", href: "/dashboard/services/", current: true },
  { name: "Create Team", href: "/dashboard/services/create", current: false },
];
export default function page() {
  return (
    <div className="py-5 space-y-5">
      <Breadcrumb pages={pages} />
    </div>
  );
}
