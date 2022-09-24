import axios from "axios";
import { createContext, useCallback, useEffect, useRef } from "react";

export const UserContext = createContext<any>({});

export const UserContextProvider = ({ children }: { children: any }) => {
  const loggedInUser = localStorage.getItem("userSession");
  const userID = loggedInUser ? JSON.parse(loggedInUser) : undefined;
  let currentUserRef: any = useRef();

  const getCurrentUser = useCallback(() => {
    axios
      .get("/users", { params: { id: userID } })
      .then((response) => response.data[0])
      .then((data) => {
        currentUserRef.current = data;
      });
  }, [userID]);

  useEffect(() => {
    userID && getCurrentUser();
  }, [getCurrentUser, userID]);

  return (
    <UserContext.Provider value={{ currentUserRef }}>
      {children}
    </UserContext.Provider>
  );
};
