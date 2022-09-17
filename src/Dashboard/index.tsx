import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import styles from "./dashboard.module.scss";

function Dashboard() {
  const { currentUser } = useContext<any>(UserContext);

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
