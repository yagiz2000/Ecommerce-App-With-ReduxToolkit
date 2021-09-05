import React from 'react';
import './App.css';
import Header from "./components/Header";
import Payment from './components/Payment';
import Cart from "./components/Cart";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App" style={{backgroundColor:"#F5F5F5",height:"100vh"}}>
        <Header></Header>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Payment></Payment>
            </Route>
            <Route exact path="/cart">
              <Cart></Cart>
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
    
  );
}

export default App;
