import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 space-y-6">
      <Card className="w-96 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">
            <div className="flex items-center justify-center cursor-pointer" onClick={()=>navigate("/")}>
              <img src={logo} alt="Logo" className="h-8 w-8" />
              <span className="text-xl text-red-500 font-bold">Amsafr</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="username">E-mail</Label>
              <Input
                id="username"
                type="text"
                placeholder="Entrez votre E-mail"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="hover:border-red-500"
                aria-label="Username"
              />
            </div>
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Entrez votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="hover:border-red-500"
                  aria-label="Password"
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="text-right">
              <a href="#" className="text-red-500 underline text-sm">
                Mot de passe oublié?
              </a>
            </div>
            <Button
              className="w-full bg-red-500 hover:bg-red-300"
              type="submit"
            >
              Se connecter
            </Button>

            <div className="text-center">
              Pas encore inscrit ?
              <Link to="/register" className="underline text-red-500">
                Inscrivez-vous 
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
