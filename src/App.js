import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Signin';
import Login from './Login';
import Home from './Home';
import Additem from './Additem';
import Signin2 from './Signin2';
import Login2 from './Login2';
import Sidebar from './Sidebar';

export default function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/additem" element={<Additem />} />
          <Route path="/ss" element={<Signin2 />} />
          <Route path="/sss" element={<Login2 />} />
          <Route path="/s" element={<Sidebar />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}
