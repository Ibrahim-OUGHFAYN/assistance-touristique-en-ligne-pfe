import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Bs({ onNavigate }) {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg: breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (path) => {
    navigate(path);
    if (onNavigate) onNavigate(); // Close mobile menu
  };

  // 🔧 Mobile version: render as plain buttons
  if (isMobile) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Button
          onClick={() => handleClick("/login")}
          variant="ghost"
          className="transition hover:text-red-500"
        >
          Explorer Maroc
        </Button>
        <Button
          onClick={() => handleClick("/register")}
          variant="ghost"
          className="transition hover:text-red-500"
        >
          Trouver guide
        </Button>
        <Button
          onClick={() => handleClick("/forget")}
          variant="ghost"
          className="transition hover:text-red-500"
        >
          Détails
        </Button>
      </div>
    );
  }

  // ✅ Desktop version: use dropdown menu
  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-base font-medium transition hover:text-red-500"
          >
            Services <ChevronDown size={18} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-48 bg-white shadow-lg rounded-md p-2 border border-red-200"
        >
          <Button
            onClick={() => handleClick("/login")}
            variant="ghost"
            className="block w-full text-left text-gray-700 hover:text-red-500 transition hover:bg-gray-100 px-4 py-2 rounded-md"
          >
            Explorer Maroc
          </Button>
          <Button
            onClick={() => handleClick("/register")}
            variant="ghost"
            className="block w-full text-left text-gray-700 hover:text-red-500 transition hover:bg-gray-100 px-4 py-2 rounded-md"
          >
            Trouver guide
          </Button>
          <Button
            onClick={() => handleClick("/forget")}
            variant="ghost"
            className="block w-full text-left text-gray-700 hover:text-red-500 transition hover:bg-gray-100 px-4 py-2 rounded-md"
          >
            Détails
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
