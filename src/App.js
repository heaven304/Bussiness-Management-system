import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './Signin';
import Login from './Login';
import Home from './Home';

export default function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
