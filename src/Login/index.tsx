import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import axios from "axios";
import { UserContext } from "../Contexts/UserContext";

function Login() {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const isLoggedIn = currentUser ? true : false;
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [navigate, currentUser]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    axios
      .post("/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.auth)
          localStorage.setItem(
            "userSession",
            JSON.stringify(response.data.results)
          );
        navigate("/dashboard");
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
          <button
            className={styles.loginBtn}
            onClick={handleLogin}
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <div className={styles.createAccount}>
        <p>No Account?</p>
        <Link to="/signup">
          <button>Create an account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
