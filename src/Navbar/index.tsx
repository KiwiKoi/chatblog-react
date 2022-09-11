import { useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./navbar.module.scss";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState<string | null>(null);

  const navbarToggler = () => {
    expandNavbar === null
      ? setExpandNavbar(styles.expandNavbar)
      : setExpandNavbar(null);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContent}>
          <div className={styles.navbarBrand}>
            <FontAwesomeIcon icon={faCode} size="lg" />
            <span>ChatBlog React</span>
          </div>
          <button
            type="button"
            onClick={() => navbarToggler()}
            className={styles.navbarToggle}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          {!expandNavbar && (
            <div className={styles.navLinks}>
              <Link to={"/"} className={styles.navLink}>
                Post List
              </Link>
              <Link to={"/newPost"} className={styles.navLink}>
                New Post
              </Link>
              <Link to={"/dashboard"} className={styles.navLink}>
                Dashboard
              </Link>
              <Link to={"/signup"} className={styles.navLink}>
                Sign Up
              </Link>
              <Link to={"/login"} className={styles.navLink}>
                Log In
              </Link>
            </div>
          )}
        </div>
      </nav>
      <div className={`${styles.mobileMenu} ${expandNavbar}`}>
        <div className={styles.mobileNavLinks}>
          <Link to={"/"} className={styles.navLink}>
            Post List
          </Link>
          <Link to={"/newPost"} className={styles.navLink}>
            New Post
          </Link>
          <Link to={"/dashboard"} className={styles.navLink}>
            Dashboard
          </Link>
          <Link to={"/signup"} className={styles.navLink}>
            Sign Up
          </Link>
          <Link to={"/login"} className={styles.navLink}>
            Log In
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
