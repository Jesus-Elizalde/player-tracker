import { type RouterOutputs } from "~/utils/api";

type Team = RouterOutputs["team"]["getAll"][0];

export const TeamCard = ({ team }: { team: Team }) => {
  return (
    <div className="card bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{team.name}</h2>
      </div>
    </div>
  );
};
