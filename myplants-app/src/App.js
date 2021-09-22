import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/pages/NavBar";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import DrinkMenu from "./components/DrinkMenu";

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/DrinkMenu' component={DrinkMenu}/>
         </Switch>
        <Footer/>
      </Router>
      
    </div>
    
  );
}

export default App;
