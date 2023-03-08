import { useRouter } from "next/router";
import { api } from "~/utils/api";

const SingleTeamPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const { data: team, refetch: refetchTeam } = api.team.getOne.useQuery({ id });
  if (!team) return <div>No team found</div>;
  return (
    <div>
      <h1>{team?.name}</h1>
      <h1>{team?.coach}</h1>
      <h1>{team?.manager}</h1>
    </div>
  );
};

export default SingleTeamPage;
