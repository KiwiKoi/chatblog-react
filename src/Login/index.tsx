import { useState } from "react";
import styles from "./login.module.scss";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginStatus, setLoginStatus] = useState<string>("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    axios
      .post("/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response)
        if (response.data.message) {
          console.log(response)
          setLoginStatus(response.data.message);
        } else {
          console.log(response.data)
          setLoginStatus(response.data.username)
        }
      });
  };

  return (
    <div className={styles.loginComponent}>
      <form >
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button onClick={handleLogin} type="submit">Login</button>
        </div>
      </form>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default Login;
