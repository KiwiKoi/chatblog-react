import Header from "./header";
import ItemList from "./ItemList";
import { Routes, Route } from "react-router-dom";
import Item from "./Item";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/posts/:id" element={<Item />} />
      </Routes>
    </>
  );
}

export default App;
