import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/pages/NavBar";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import HotDrink from "./components/HotDrink";
import ColdDrink from "./components/ColdDrink";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/HotDrink' component={HotDrink}/>
          <Route path='/ColdDrink' component={ColdDrink}/>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
    
  );
}

export default App;
