import React, { useState } from "react";

export const EditTeamModal = ({
  teamId,
  onSave,
}: {
  teamId: string;
  onSave: (team: {
    name: string;
    coach: string;
    manager: string;
    teamId: string;
  }) => void;
}) => {
  const [name, setName] = useState<string>("");
  const [coach, setCoach] = useState<string>("");
  const [manager, setManager] = useState<string>("");

  const [nameInput, setNameInput] = useState<boolean>(true);
  const [coachInput, setCoachInput] = useState<boolean>(true);
  const [managerInput, setManagerInput] = useState<boolean>(true);

  const submitHandler = (team: {
    name: string;
    coach: string;
    manager: string;
    teamId: string;
  }) => {
    if (name.trim() === "") {
      setNameInput(false);
    }
    if (coach.trim() === "") {
      setCoachInput(false);
    }
    if (manager.trim() === "") {
      setManagerInput(false);
    } else {
      onSave({ name, coach, manager, teamId });
      setName("");
      setCoach("");
      setManager("");
      setNameInput(true);
      setCoachInput(true);
      setManagerInput(true);
    }
  };

  return (
    <>
      <label htmlFor="my-modal-7" className="btn-accent btn mb-2 ml-3">
        Edit Team
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Edit Team</h3>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name of Team:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input-bordered input w-full max-w-xs ${
                !nameInput ? "input-error" : ""
              }`}
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <label className="label">
              <span className="label-text">Coach Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input-bordered input w-full max-w-xs ${
                !coachInput ? "input-error" : ""
              }`}
              value={coach}
              onChange={(e) => setCoach(e.currentTarget.value)}
            />
            <label className="label">
              <span className="label-text">Manager Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input-bordered input w-full max-w-xs ${
                !managerInput ? "input-error" : ""
              }`}
              value={manager}
              onChange={(e) => setManager(e.currentTarget.value)}
            />
          </div>

          <div className="modal-action">
            <label htmlFor="my-modal-7" className="btn">
              Close
            </label>
            <label
              htmlFor=""
              className="btn"
              onClick={() => {
                submitHandler({ name, coach, manager, teamId });
              }}
            >
              Create
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
