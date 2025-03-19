import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import Roles from "../components1/Roles";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 p-6">
        <CardContent>
          <h2 className="text-2xl font-semibold text-red-500 text-center mb-4">
            S'inscrire
          </h2>
          <form>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="firstname">Prénom</Label>
                <Input
                  className="hover:border-red-500"
                  placeholder="Prenom"
                  id="firstname"
                  type="text"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastname">nom</Label>
                <Input
                  id="lastname"
                  type="text"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  placeholder="nom"
                  className="hover:border-red-500"
                />
              </div>
            </div>
            <div className="mt-3">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                className="hover:border-red-500"
                required
              />
            </div>
            <div className="mt-3">
              <Label htmlFor="email">le rôle</Label>
              <Roles></Roles>
            </div>
            <div className="mt-3 relative">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="mot de passe"
                  required
                  className="hover:border-red-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="mt-3 relative">
              <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="mot de passe"
                  className="hover:border-red-500"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>
            <Button
              className="w-full mt-4 bg-red-500 hover:bg-red-600"
              type="submit"
            >
              Submit
            </Button>
          </form>
          <br />
          <div className="text-center">
            J'ai déjà un compte?
            <Link to="/Login" className="underline text-red-500">
              Se connecter
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
