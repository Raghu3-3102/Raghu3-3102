
import './App.css';
import React, { useState } from 'react';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Food from './pages/Food';
import Snacks from './pages/Snacks';
import Drinks from './pages/Drinks';
import Deserts from './pages/Deserts';
import Show_food from './pages/Show_food';
import SignUp_manager from './pages/SignUp_manager';
import Book_food_know from './pages/Book_food_know';
import SignUp_show from './pages/SignUp_show';
import Currency_convetor from './pages/Currency_convetor';
import Serving_item from './pages/Serving_item';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import Book_food from './pages/Book_food';
import CodeEnter from './pages/CodeEnter';



function App() {

  return (
    <div className="App">   
   
   <BrowserRouter >

   <Toaster
  position="top-center"
  reverseOrder={true}
/>

   <Routes>

   <Route
    path="/"
    element={<SignUp />}/>

   <Route
    path="/home"
    element={<Home />}/>

    

 

<Route
    path="/login"
    element={<Login />}/>
    
    <Route
    path="/food-register"
    element={<Serving_item />}/>

<Route
    path="/Book_food/:foodid"
    element={<Book_food />}/>

<Route
    path="/foods"
    element={<Food />}/>

<Route
    path="/drinks"
    element={<Drinks />}/>

<Route
    path="/snackes"
    element={<Snacks />}/>

<Route
    path="/desert"
    element={<Deserts />}/>

<Route
    path="/currency"
    element={<Currency_convetor />}/>

<Route
    path="/books/:foodid"
    element={<Book_food_know />}/>

<Route
    path="/SignUp-manager"
    element={<SignUp_manager />}/>

<Route
    path="/Serving_item"
    element={<Serving_item />}/>

<Route
    path="Sign_up"
    element={<SignUp_show />}/>

<Route
    path="Show_food"
    element={<Show_food />}/>

    
<Route
    path="CodeEnter"
    element={<CodeEnter />}/>

    


     


   </Routes>


   </BrowserRouter>

   

   </div>

      
  );
}

export default App;
