import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register";
import Header from "./components1/Header"


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
      <Header/>
      <Routes>
          <Route index element={<App />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
)
