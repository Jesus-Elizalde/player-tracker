import { useRouter } from "next/router";
import React, { useState } from "react";

export const NewPlayerModal = ({
  onSave,
}: {
  onSave: (player: {
    firstName: string;
    lastName: string;
    teamId: string;
  }) => void;
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const [firstNameInput, setFirstNameInput] = useState<boolean>(true);
  const [lastNameInput, setLastNameInput] = useState<boolean>(true);

  const router = useRouter();
  const { id } = router.query as { id: string };
  const teamId = id;

  const submitHandler = (player: {
    firstName: string;
    lastName: string;
    teamId: string;
  }) => {
    if (firstName === "") {
      setFirstNameInput(false);
    }
    if (lastName === "") {
      setLastNameInput(false);
    } else {
      onSave({ firstName, lastName, teamId });
      setFirstName("");
      setLastName("");
      setFirstNameInput(true);
      setLastNameInput(true);
    }
  };

  return (
    <>
      <label htmlFor="my-modal-6" className="btn-accent btn mb-2">
        New player
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Create a New player</h3>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input-bordered input w-full max-w-xs ${
                !firstNameInput ? "input-error" : ""
              }`}
              value={firstName}
              onChange={(e) => setFirstName(e.currentTarget.value)}
            />
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`input-bordered input w-full max-w-xs ${
                !lastNameInput ? "input-error" : ""
              }`}
              value={lastName}
              onChange={(e) => setLastName(e.currentTarget.value)}
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
                submitHandler({ firstName, lastName, teamId });
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
