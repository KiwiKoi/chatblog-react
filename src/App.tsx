import Header from "./Header";
import PostList from "./PostList";
import { Routes, Route } from "react-router-dom";
import PostDetail from "./PostDetail";
import PostCreate from "./PostCreate";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/newPost" element={<PostCreate />} />
      </Routes>
    </>
  );
}

export default App;
