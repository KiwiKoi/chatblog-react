import Navbar from "./Navbar";
import PostList from "./PostList";
import { Routes, Route } from "react-router-dom";
import PostDetail from "./PostDetail";
import PostCreate from "./PostCreate";
import Dashboard from "./Dashboard";
import UserCreate from "./UserCreate";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/newPost" element={<PostCreate />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<UserCreate />} />
      </Routes>
    </>
  );
}

export default App;
