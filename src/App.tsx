import Navbar from "./Navbar";
import PostList from "./PostList";
import { Routes, Route } from "react-router-dom";
import PostDetail from "./PostDetail";
import NewPost from "./NewPost";
import Dashboard from "./Dashboard";
import SignUp from "./SignUp";
import Login from "./Login";
import { UserContextProvider } from "./Contexts/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <Navbar />
      </UserContextProvider>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/newPost" element={<NewPost />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
