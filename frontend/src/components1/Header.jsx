import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import MenuIcon from "../assets/menu.png";
import Bs from "./Bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white">
      <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate("/")}>
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <span className="text-xl text-red-500 font-bold">Amsafr</span>
      </div>

      {/* menu f téléphone */}
      <button className="lg:hidden p-2" onClick={toggleMenu}>
        <img src={MenuIcon} alt="Menu" className="w-6 h-6" />
      </button>
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg flex flex-col items-center py-4 gap-2">
          <Button variant="ghost" className="transition hover:text-red-500" onClick={() => navigate("/")}>
            Accueil
          </Button>
          <Button variant="ghost" className="transition hover:text-red-500" onClick={() => navigate("/about")}>
            À propos de nous
          </Button>
          <Bs />
          <Button variant="ghost" className="transition hover:text-red-500" onClick={() => navigate("/contact")}>
            Contact
          </Button>
          <Button
            className="transition bg-red-500 hover:bg-red-300"
            onClick={() => {navigate("/login");setIsMenuOpen(false);}}
          >
            Se connecter
          </Button>
          <Button
            className="transition border border-red-500 bg-white text-black hover:bg-red-300"
            onClick={() =>{navigate("/register");setIsMenuOpen(false);}}
          >
            S'inscrire
          </Button>
        </div>
      )}

      {/* menu f PC */}
      <div className="hidden lg:flex gap-4">
        <Button variant="ghost" className="transition hover:text-red-500" onClick={() => navigate("/")}>
          Accueil
        </Button>
        <Button variant="ghost" className="transition hover:text-red-500" onClick={() => navigate("/about")}>
          À propos de nous
        </Button>
        <Bs />
        <Button variant="ghost" className="transition hover:text-red-500" onClick={() => navigate("/contact")}>
          Contact
        </Button>
        <Button
          className="transition hover:bg-red-300 bg-red-500"
          onClick={() => navigate("/login")}
        >
          Se connecter
        </Button>
        <Button
          className="transition border border-red-500 bg-white text-black hover:bg-red-300"
          onClick={() => navigate("/register")}
        >
          S'inscrire
        </Button>
      </div>
    </nav>
  );
};

export default Header;
