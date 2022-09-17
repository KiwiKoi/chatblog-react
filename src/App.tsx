import Navbar from "./Navbar";
import PostList from "./PostList";
import { Routes, Route } from "react-router-dom";
import PostDetail from "./PostDetail";
import NewPost from "./NewPost";
import Dashboard from "./Dashboard";
import SignUp from "./SignUp";
import Login from "./Login";
import { UserContextProvider } from "./Contexts/UserContext";
import { useEffect, useState, useContext } from "react";
import ProtectedRoute from "./ProtectedRoute";
import { UserContext } from "./Contexts/UserContext";

function App() {
  const { currentUser } = useContext(UserContext);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    currentUser && setIsAuth(true);
  }, [currentUser, isAuth]);

  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <PostList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts/:id"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <PostDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/newPost"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <NewPost />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
