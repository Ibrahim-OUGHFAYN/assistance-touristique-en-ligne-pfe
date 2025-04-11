import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "../assets/menu.png";
import Bs from "./Bs";
import { useNavigate } from "react-router-dom";
import LogoComp from "./LogoComp";
import cancel from "../assets/cancel.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Reference for the menu container

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between p-4 shadow-md bg-gray-100 rounded-full w-[90%] max-w-15xl">
      <div className="pl-3">
        <LogoComp />
      </div>

      {/* Burger Menu Button */}
      <button className="lg:hidden p-2" onClick={toggleMenu}>
        {isMenuOpen?(<img src={cancel} alt="Menu" className="w-6 h-6" />):(<img src={MenuIcon} alt="Menu" className="w-6 h-6" />)}
      </button>

      {/* Menu for Mobile */}
      {isMenuOpen && (
        <div
          className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg flex flex-col items-center py-4 gap-2 rounded-lg border-1 border-red-500"
        >
          <Button
            variant="ghost"
            className="transition hover:text-red-500"
            onClick={() => navigate("/")}
          >
            Accueil
          </Button>
          <Button
            variant="ghost"
            className="transition hover:text-red-500"
            onClick={() => navigate("/about")}
          >
            À propos de nous
          </Button>

          {/* Pass close callback here */}
          <Bs onNavigate={() => setIsMenuOpen(false)} />

          <Button
            variant="ghost"
            className="transition hover:text-red-500"
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
          <Button
            className="transition bg-red-500 hover:bg-red-300"
            onClick={() => {
              navigate("/login");
              setIsMenuOpen(false);
            }}
          >
            Se connecter
          </Button>
          <Button
            className="transition border border-red-500 bg-white text-black hover:bg-red-300"
            onClick={() => {
              navigate("/register");
              setIsMenuOpen(false);
            }}
          >
            S'inscrire
          </Button>
        </div>
      )}

      {/* Menu for Desktop */}
      <div className="hidden lg:flex gap-4">
        <Button
          variant="ghost"
          className="transition hover:text-red-500"
          onClick={() => navigate("/")}
        >
          Accueil
        </Button>
        <Button
          variant="ghost"
          className="transition hover:text-red-500"
          onClick={() => navigate("/about")}
        >
          À propos de nous
        </Button>

        <Bs />

        <Button
          variant="ghost"
          className="transition hover:text-red-500"
          onClick={() => navigate("/contact")}
        >
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
