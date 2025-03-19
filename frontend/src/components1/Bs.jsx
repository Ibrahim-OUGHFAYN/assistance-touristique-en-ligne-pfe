import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Bs() {
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
            variant="ghost"
            className="w-full text-left text-gray-700 hover:text-red-500 transition hover:bg-gray-100 px-4 py-2 rounded-md  hover:border border-red-200" 
          >
            Explorer Maroc 
          </Button>
          <Button
            variant="ghost"
            className="w-full text-left text-gray-700 hover:text-red-500 transition hover:bg-gray-100 px-4 py-2 rounded-md hover:border border-red-200"
          >
            Trouver guide
          </Button>
          <Button
            variant="ghost"
            className="w-full text-left text-gray-700 hover:text-red-500 transition hover:bg-gray-100 px-4 py-2 rounded-md hover:border border-red-200"
          >
            détails
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
