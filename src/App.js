import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import CardDetails from './Component/CardDetails';
import Cards from './Component/Cards';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>
      <Routes>
          <Route path="/" element={<Cards />}/>
          <Route path="/cart/:id" element={<CardDetails />}/>
      </Routes>
    </>
    
      
  );
}

export default App;
