import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import styles from "./dashboard.module.scss";

function Dashboard() {
  // const { currentUser } = useContext<any>(UserContext);
  const [currentUser, setCurrentUser] = useState<any>({});


  useEffect(() => {
    const loggedInUser = localStorage.getItem("userSession");

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
    }

  }, []);

  return (
    <>
      <div>
        <h1 className={styles.dashboardComponent}>Dashboard</h1>
        <p>{currentUser.username}</p>
        <p>{currentUser.email}</p>
        <p>{currentUser.firstname}</p>
        <p>{currentUser.lastname}</p>
      </div>
    </>
  );
}

export default Dashboard;
