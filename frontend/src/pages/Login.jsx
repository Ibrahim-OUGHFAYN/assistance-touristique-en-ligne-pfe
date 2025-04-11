import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoComp from '../components1/LogoComp'


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
    <div className="flex flex-col justify-center items-center h-screen bg-transparent space-y-6 ">
      <Card className="w-96 shadow-lg border-red-300 border-1 shadow-2xl shadow-red-300">
        <CardHeader>
          <CardTitle className="text-center">
            <LogoComp></LogoComp>
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
            <Link to="/Forget" className="underline text-red-500 text-sm">
            Mot de passe oublié?
              </Link>
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
