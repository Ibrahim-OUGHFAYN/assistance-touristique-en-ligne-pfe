import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import logo from "../assets/logo.png";



export default function Login() {
  
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 space-y-6">
        <div className="text-center cursor-pointer">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <span className="text-xl text-red-500 font-bold">Amsafr</span>
      </div>
      <Card className="w-96 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Mot de passe oublié</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="username">E-mail</Label>
              <Input
                id="username"
                type="text"
                placeholder="Entrez votre E-mail"
                value={username}
                className="hover:border-red-500"
                aria-label="Username"
              />
            </div>  
            <Button
              className="w-full bg-red-500 hover:bg-red-300"
              type="submit"
            >
              
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
