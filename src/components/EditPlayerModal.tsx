import { useRouter } from "next/router";
import React, { useState } from "react";

export const EditPlayerModal = ({
  playerId,
  onSave,
}: {
  playerId: string;
  onSave: (player: {
    firstName: string;
    lastName: string;
    playerId: string;
  }) => void;
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const [firstNameInput, setFirstNameInput] = useState<boolean>(true);
  const [lastNameInput, setLastNameInput] = useState<boolean>(true);

  const submitHandler = (player: {
    firstName: string;
    lastName: string;
    playerId: string;
  }) => {
    if (firstName === "") {
      setFirstNameInput(false);
    }
    if (lastName === "") {
      setLastNameInput(false);
    } else {
      onSave({ firstName, lastName, playerId });
      setFirstName("");
      setLastName("");
      setFirstNameInput(true);
      setLastNameInput(true);
    }
  };

  return (
    <>
      <label htmlFor="my-modal-8" className="btn-accent btn mb-2">
        Edit
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-8" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Edit player</h3>
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
            <label htmlFor="my-modal-8" className="btn">
              Close
            </label>
            <label
              htmlFor=""
              className="btn"
              onClick={() => {
                submitHandler({ firstName, lastName, playerId });
              }}
            >
              Edit
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
