import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         Grocery List

         <body>        
          <button onclick="addItem()">Add</button>
          <ul id="groceryList"></ul>
          <script src="src/js/script.js"></script>
        </body>
      </header>
      
    </div>
  );
}

export default App;
