import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const add = (e) => {
    e.preventDefault();
    if (!item) {
      return;
    }
    if (items.indexOf(item) !== -1) return;
    setItems((items) => {
      var tmpItems = [...items, item];

      return tmpItems.sort((a, b) => sortByName(a, b));
    });
  };

  const remove = (index) => {
    setItems((items) => items.filter((_, i) => i !== index));
  };

  function sortByName(a, b) {
    return a > b;
  }

  return (
    <div className="App">
      <form onSubmit={add}>
        <br/>
          <input value={item} onChange={(e) => setItem(e.target.value)} /> <button type="submit">add item</button>
      </form>
      {items.map((item, index) => {
        return (
          <div key={item}>
            <p>
              {item} <button onClick={() => remove(index)}>x</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
