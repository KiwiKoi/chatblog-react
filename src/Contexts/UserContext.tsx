import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { User } from "../types";

export const UserContext = createContext<object>({});

export const UserContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<object>({});

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("userSession");

  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setCurrentUser(foundUser);
  //   }

  // }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
