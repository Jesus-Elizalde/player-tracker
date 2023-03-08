import React, { useState } from "react";

export const NewTeamModal = ({
  onSave,
}: {
  onSave: (team: { name: string; coach: string; manager: string }) => void;
}) => {
  const [name, setName] = useState<string>("");
  console.log("🚀 ~ file: NewTeamModal.tsx:9 ~ name:", name);
  const [coach, setCoach] = useState<string>("");
  console.log("🚀 ~ file: NewTeamModal.tsx:11 ~ coach:", coach);
  const [manager, setManager] = useState<string>("");
  console.log("🚀 ~ file: NewTeamModal.tsx:13 ~ manager:", manager);
  return (
    <>
      <label htmlFor="my-modal-6" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Create a New Team</h3>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name of Team:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input-bordered input w-full max-w-xs"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <label className="label">
              <span className="label-text">Coach Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input-bordered input w-full max-w-xs"
              value={coach}
              onChange={(e) => setCoach(e.currentTarget.value)}
            />
            <label className="label">
              <span className="label-text">Manager Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input-bordered input w-full max-w-xs"
              value={manager}
              onChange={(e) => setManager(e.currentTarget.value)}
            />
          </div>

          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Close
            </label>
            <label
              htmlFor=""
              className="btn"
              onClick={() => {
                onSave({ name, coach, manager });
                setName("");
                setCoach("");
                setManager("");
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
