import PageHeading from "@/components/UI/PageHeading";
import getTeamByID from "@/data/getTeamByID";
import EditTeamForm from "../components/EditTeamForm";

export default async function page({ params }) {
  const { id } = params;

  const team = await getTeamByID(parseInt(id));
  return (
    <div className="py-5 space-y-5">
      <PageHeading
        title="Edit "
        navigateTo={"/dashboard/team"}
        actionTitle="Back"
      />
      <EditTeamForm team={team} />
    </div>
  );
}
