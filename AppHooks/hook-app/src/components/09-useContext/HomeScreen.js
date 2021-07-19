import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  //Asi recuperamos lo que pasamos por el value
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <h2>Home screen</h2>
      <br />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};
