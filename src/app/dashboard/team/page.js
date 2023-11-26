import Breadcrumb from "@/components/Breadcrumb";
import TeamList from "./components/TeamList";
const pages = [
  { name: "home", href: "/dashboard/team/", current: true },
  { name: "Create Team", href: "/dashboard/team/create", current: false },
];
export default function page() {
  return (
    <div className="py-5 space-y-5">
      <Breadcrumb pages={pages} />
      <TeamList />
    </div>
  );
}
