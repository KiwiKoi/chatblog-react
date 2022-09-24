import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import styles from "./dashboard.module.scss";

function Dashboard() {
  const { currentUserRef } = useContext<any>(UserContext);

  return (
    <>
      <div>
        <h1 className={styles.dashboardComponent}>Dashboard</h1>
        <p>{currentUserRef.current.username}</p>
        <p>{currentUserRef.current.email}</p>
        <p>{currentUserRef.current.firstname}</p>
        <p>{currentUserRef.current.lastname}</p>
      </div>
    </>
  );
}

export default Dashboard;
