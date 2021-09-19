import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/pages/NavBar";
import Home from "./components/pages/HomePage/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
      <h3>Happy Growing</h3> 
    </div>
    
  );
}

export default App;
