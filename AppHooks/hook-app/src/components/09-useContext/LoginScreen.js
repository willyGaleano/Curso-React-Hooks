import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const newUser = {
    id: 123,
    name: "Williams",
  };

  return (
    <div>
      <p>LoginScreen</p>
      <br />
      <button className="btn btn-primary" onClick={() => setUser(newUser)}>
        Send Nudes
      </button>
    </div>
  );
};
