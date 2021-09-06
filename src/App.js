import React from 'react';
import './App.css';
import Header from "./components/Header";
import Payment from './components/Payment';
import Cart from "./components/Cart";
import Products from "./components/Products";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" style={{backgroundColor:"#F5F5F5",height:"100%"}}>
        <Header></Header>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Payment></Payment>
            </Route>
            <Route exact path="/cart">
              <Cart></Cart>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
    
  );
}

export default App;
