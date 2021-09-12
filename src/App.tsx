import React from "react";
import './App.css';
import ProductList from './components/productList/productList';
import LoginButton from './components/login/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Profile from './components/userProfile/userProfile'
/*
 <LoginButton />
    <div className="App">
      <ProductList />
    </div>
   
*/
function App(): any {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login/Signup</Link>
          </li>
        </ul>
        <Profile />
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        
        <Switch>
          <Route exact path="/">
          <div className="App">
              <ProductList />
          </div>
          </Route>
          <Route path="/login">
            <LoginButton />
          </Route>
         </Switch>
      </div>
    </Router>
  );
}
export default App;
