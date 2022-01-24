import React from 'react';
import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';



export default function Router() {
    return (
      <BRouter>
        <Routes>
          <Route path='/'  element={< Home />} />
          <Route path='/Details' element={<Details/>}/>
        </Routes>
      </BRouter>
    );
  }
  
