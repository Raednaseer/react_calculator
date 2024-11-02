import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Calculator from './Calculator'
import Header from './Header'
import Footer from './Footer'
import {Provider} from 'react-redux'
import BookContainer from './BookContainer';

 
function App() {
  return (
    <>
   
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Calculator />
      </main>
      <Footer />
    </div>
    </>
  )
}
export default App;

{/*
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Ensure this path is correct
import BookContainer from './BookContainer'; // Ensure this path is correct
import './index.css';

function App() {
    return (
        <Provider store={store}>
            <BookContainer />
        </Provider>
    );
}


import React from "react";
import { Provider } from "react-redux";
import store from "./Newstore";
import NewComponent from "./NewComponent";
function App(){
  return(
    <Provider store = {store}>
      <NewComponent />
    </Provider>
  )
}
export default App;

*/}