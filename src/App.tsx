import Header from "./Header";
import PostList from "./PostList";
import { Routes, Route } from "react-router-dom";
import PostDetail from "./PostDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
