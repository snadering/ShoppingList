import "./styles/App.css";
import shopMateLogo from "./assets/shopmate-logo.svg";
import ItemList from "./components/ItemList";
import ItemInput from "./components/ItemInput";
import { useState, useEffect } from "react";
import { getAll, create } from "./api/api.js";

function App() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const data = await getAll();
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addItem = async (newItem) => {
    await create(newItem);
    fetchData();
  };

  return (
    <>
      <div className="flex justify-center">
        <img src={shopMateLogo} alt="ShopMate Logo" 
        className="w-auto h-60"/>
      </div>
      <ItemList items={items} fetchData={fetchData} />
      <ItemInput onAddItem={addItem} />
    </>
  );
}

export default App;
