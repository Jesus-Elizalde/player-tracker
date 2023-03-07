import { TeamCard } from "~/components/TeamCard";
import { api } from "~/utils/api";

const AllTeamsPage = () => {
  const { data: teams, refetch: refetchTeams } = api.team.getAll.useQuery(
    undefined // no input
  );
  console.log("🚀 ~ file: index.tsx:7 ~ AllTeamsPage ~ teams:", teams);
  return (
    <div className="container mx-auto">
      <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {teams?.map((team) => (
          <TeamCard team={team} />
        ))}
      </div>
    </div>
  );
};

export default AllTeamsPage;
