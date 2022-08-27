import Header from "./header/Header";
import ItemList from "./itemList/itemList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemList />} />
      </Routes>
    </>
  );
}

export default App;
