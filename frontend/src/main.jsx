import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register";
import Header from "./components1/Header"
import Forget from "./pages/Forget"
import Reset from "./pages/Reset"


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
      <Header/>
      <Routes>
          <Route index element={<App />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/Forget/Reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
)
