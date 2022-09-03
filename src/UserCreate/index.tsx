import { useState } from "react";
import styles from "./userCreate.module.scss";
import { v4 as uuidv4 } from "uuid";

function UserCreate() {
  const [username, setUsername] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user = {
      id: uuidv4(),
      username,
      firstname,
      lastname,
      email,
      password,
    };

    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  };

  return (
    <>
      <div className={styles.userCreateComponent}>
        <h1 className={styles.formTitle}>Create User</h1>
        <form className={styles.createUserForm} onSubmit={handleSubmit}>
          <div className={styles.formBlock}>
            <label>Username :</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.formBlock}>
            <label>Email :</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formBlock}>
            <label>Firstname :</label>
            <input
              type="text"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className={styles.formBlock}>
            <label>Lastname :</label>
            <input
              type="text"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className={styles.formBlock}>
            <label>password :</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.formBlock}>
            <label>confirm password :</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit">Create User</button>
        </form>
      </div>
    </>
  );
}

export default UserCreate;
