import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import NavWrapper from "./Components/NavWrapper";

function App() {
  return (
    <div className="App">
      <nav>
        <Route path="/" component={NavWrapper} />
      </nav>
    </div>
  );
}

export default App;
