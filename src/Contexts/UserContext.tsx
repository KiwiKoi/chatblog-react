import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

export const UserContext = createContext<any>({});

export const UserContextProvider = ({ children }: { children: any }) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const loggedInUser = localStorage.getItem("userSession");
  const userID = loggedInUser ? JSON.parse(loggedInUser) : undefined;

  const getCurrentUser = useCallback(() => {
    axios
      .get("/users", { params: { id: userID } })
      .then((response) => response.data[0])
      .then((data) => setCurrentUser(data));
    console.log(currentUser);
  }, [userID]);

  useEffect(() => {
    userID && getCurrentUser();
  }, [getCurrentUser, userID]);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
