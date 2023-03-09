import { useRouter } from "next/router";
import { NewPlayerModal } from "~/components/NewPlayerModal";
import { api } from "~/utils/api";

const SingleTeamPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const { data: team, refetch: refetchTeams } = api.team.getOne.useQuery({
    id,
  });

  const createPlayer = api.player.create.useMutation({
    onSuccess: () => {
      void refetchTeams();
    },
  });

  const deletePlayer = api.player.delete.useMutation({
    onSuccess: () => {
      void refetchTeams();
    },
  });

  const deleteTeam = api.team.delete.useMutation({
    onSuccess: () => {
      void refetchTeams();
    },
  });

  return (
    <div className="container mx-auto">
      <h1 className="">{team?.name}</h1>
      <h1>{team?.coach}</h1>
      <h1>{team?.manager}</h1>
      <NewPlayerModal
        onSave={({ firstName, lastName, teamId }) =>
          void createPlayer.mutate({ firstName, lastName, teamId })
        }
      />
      <button
        className="btn-error btn ml-4"
        onClick={() => {
          void deleteTeam.mutate({ id });
          router.push("/teams");
        }}
      >
        Delete Team
      </button>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {team?.players?.map((player, idx) => (
              <tr key={idx} className="hover">
                <th>{idx + 1}</th>
                <td>{player.firstName}</td>
                <td>{player.lastName}</td>
                <td>
                  <button
                    className="btn-error btn"
                    onClick={() => void deletePlayer.mutate({ id: player.id })}
                  >
                    Delete
                  </button>
                  <button className=" btn ml-1">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleTeamPage;
