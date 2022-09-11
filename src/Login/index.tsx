import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(true);
      }
    });
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    axios
      .post("/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (!response.data.auth) {
          setLoginStatus(false);
        } else {
          localStorage.setItem("token", response.data.token);
          setLoginStatus(true);
          navigate("/");
        }
      });
  };

  return (
    <div className={styles.loginComponent}>
      <form>
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
          <button onClick={handleLogin} type="submit">
            Login
          </button>
        </div>
      </form>
      <h1>{loginStatus ? "Logged in" : "not logged in"}</h1>
    </div>
  );
}

export default Login;
