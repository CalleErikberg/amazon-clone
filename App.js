import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import Home from "./Home";
import Checkout from './Checkout';
import { auth } from "./firebase";
import Login from './Login';
import { useStateValue } from './StateProvider';

//NPM RUN BUILD TO APPLY CHANGES

function App() {
const [{user}, dispatch] = useStateValue();

//UseEffect hook!!!
//Code that runs based on given condition
useEffect(() => {
 const unsubscribe = auth.onAuthStateChanged((authUser) =>{
   if(authUser){
     //user is logged in
     dispatch({
       type: "SET_USER",
       user: authUser,
     })
   }else {
     //user is logged out
     dispatch({
       type:"SET_USER",
       user: null,
     })
   }
 })
 return () => {
   //cleanup here
   unsubscribe();
 }
}, [])
console.log(user);
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header></Header>
          <Checkout></Checkout>
        </Route>
        <Route path ="/login">
          <Login></Login>
        </Route>
        <Route path="/">
          {/* Default*/}
          <Header></Header>
          <Home></Home>
        </Route>
      </Switch>
   </div>
   </Router>
    
  );
}

export default App;
