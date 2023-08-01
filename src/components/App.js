import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      {darkMode ? (
        <div className="dark">
        </div>
      ) : (
        <div className="light">
        </div>
      )}
      <ShoppingList items={itemData} />
    </div>
  );
}
export default App;
