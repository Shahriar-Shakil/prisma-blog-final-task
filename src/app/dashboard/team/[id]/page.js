import Breadcrumb from "@/components/Breadcrumb";
import getTeamByID from "@/data/getTeamByID";
import EditTeamForm from "../components/EditTeamForm";

export default async function page({ params }) {
  const { id } = params;

  const team = await getTeamByID(parseInt(id));
  const pages = [
    { name: "home", href: "/dashboard/team/", current: false },
    {
      name: `Team ${team.name}`,
      href: `/dashboard/team/${team.id}`,
      current: true,
    },
  ];
  return (
    <div className="py-5 space-y-5">
      <Breadcrumb pages={pages} />

      <EditTeamForm team={team} />
    </div>
  );
}
