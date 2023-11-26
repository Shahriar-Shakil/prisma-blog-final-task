import PageHeading from "@/components/UI/PageHeading";
import CreateTeamForm from "../components/CreateTeamForm";

export default function page() {
  return (
    <div className="py-5 space-y-5">
      <PageHeading
        title="Create Team Form"
        navigateTo={"/dashboard/team"}
        actionTitle="Back"
      />
      <CreateTeamForm />
    </div>
  );
}
