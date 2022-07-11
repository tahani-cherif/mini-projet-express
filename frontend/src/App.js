
import './App.css';
import { styled } from '@mui/material/styles';
import {Box,Grid,Paper} from '@mui/material'
import React,{ useEffect, useState } from'react'
import Main from './main.js'
import Ajout from './ajout';
import {BrowserRouter  ,Routes,Route} from 'react-router-dom'
function App() {
/*const[test,setTest]=useState("")
useEffect(()=>{
  fetch('/getalluser').then(res=>{
    return res.json()
  }).then(x=>console.log(x))
},[])
console.log(test)*/
  return (
 <BrowserRouter >
    <div className="App">
      <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route path="/insc" element={<Ajout/>} />
          </Routes>
                
      </div>
      </BrowserRouter >
  );
}

export default App;
