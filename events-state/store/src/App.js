import './App.css';

import React, { useState } from "react";
import CardsView from "./components/CardsView";
import ListView from "./components/ListView";
import IconSwitch from "./components/IconSwitch";
import Store from "./components/Store";

function App() {
  // eslint-disable-next-line no-use-before-define
  return (
    <div className="App">
      <Store />
    </div>
  );
}

export default App;
