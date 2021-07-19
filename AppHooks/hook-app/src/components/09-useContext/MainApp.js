import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    //Que es lo quiero compartir en value
    <UserContext.Provider
      value={{
        user,
        setUser,
        temporal: 123456,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
};
