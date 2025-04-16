import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuIcon from "../assets/menu.png";
import Bs from "./Bs";
import { useNavigate, useLocation } from "react-router-dom";
import LogoComp from "./LogoComp";
import cancel from "../assets/cancel.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/me", {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        console.log("User not logged in.");
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/logout", {}, { withCredentials: true });
      setUser(null);
      window.location.reload();
    } catch (err) {
      console.log("Logout error:", err);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  const ProfileDropdown = () => (
    <div className="absolute right-0 mt-12 bg-white border rounded shadow w-40">
      <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => navigate("/update-profile")}
      >
        Update Profile
      </button>
      <button
        className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between p-4 shadow-md bg-gray-100 rounded-full w-[90%] max-w-15xl">
      <div className="pl-3">
        <LogoComp />
      </div>

      {/* Burger Menu Button */}
      <button className="lg:hidden p-2" onClick={toggleMenu}>
        {isMenuOpen ? (
          <img src={cancel} alt="Menu" className="w-6 h-6" />
        ) : (
          <img src={MenuIcon} alt="Menu" className="w-6 h-6" />
        )}
      </button>

      {/* Menu for Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg flex flex-col items-center py-4 gap-2 rounded-lg border-1 border-red-500">
          <Button variant="ghost" onClick={() => handleScroll("hero")}>Accueil</Button>
          <Button variant="ghost" onClick={() => handleScroll("about")}>À propos de nous</Button>
          <Bs onNavigate={() => setIsMenuOpen(false)} />
          <Button variant="ghost" onClick={() => handleScroll("contact")}>Contact</Button>

          {user ? (
            <>
              <img
                src={user.profilePic || "/default-avatar.png"}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              />
              {profileMenuOpen && <ProfileDropdown />}
            </>
          ) : (
            <>
              <Button className="bg-red-500 hover:bg-red-300" onClick={() => { navigate("/login"); setIsMenuOpen(false); }}>Se connecter</Button>
              <Button className="border border-red-500 bg-white text-black hover:bg-red-300" onClick={() => { navigate("/register"); setIsMenuOpen(false); }}>S'inscrire</Button>
            </>
          )}
        </div>
      )}

      {/* Menu for Desktop */}
      <div className="hidden lg:flex gap-4 items-center">
        <Button variant="ghost" onClick={() => handleScroll("hero")}>Accueil</Button>
        <Button variant="ghost" onClick={() => handleScroll("about")}>À propos de nous</Button>
        <Button variant="ghost" onClick={() => handleScroll("contact")}>Contact</Button>
        <Bs />

        {user ? (
          <div className="relative">
            <img
              src={user.profilePic || "/default-avatar.png"}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            />
            {profileMenuOpen && <ProfileDropdown />}
          </div>
        ) : (
          <>
            <Button className="bg-red-500 hover:bg-red-300" onClick={() => navigate("/login")}>Se connecter</Button>
            <Button className="border border-red-500 bg-white text-black hover:bg-red-300" onClick={() => navigate("/register")}>S'inscrire</Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
