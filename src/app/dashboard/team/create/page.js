import Breadcrumb from "@/components/Breadcrumb";
import CreateTeamForm from "../components/CreateTeamForm";
const pages = [
  { name: "home", href: "/dashboard/team/", current: false },
  { name: "Create Team", href: "/dashboard/team/create", current: true },
];
export default function page() {
  return (
    <div className="py-5 space-y-5">
      <Breadcrumb pages={pages} />

      <CreateTeamForm />
    </div>
  );
}
