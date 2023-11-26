import PageHeading from "@/components/UI/PageHeading";
import TeamList from "./components/TeamList";

export default function page() {
  return (
    <div className="py-5 space-y-5">
      <PageHeading
        title="Create New Team"
        navigateTo={"/dashboard/team/create"}
        actionTitle="Create Team"
      />
      <TeamList />
    </div>
  );
}
