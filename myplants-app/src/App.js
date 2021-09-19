import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/pages/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
      <h3>Happy Growing</h3> 
    </div>
    
  );
}

export default App;
