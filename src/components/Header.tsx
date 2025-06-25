
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              MAISON ELUXIA
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">NOUVEAUTÉS</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">COLLECTIONS</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">VITRAUX</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">LUMINAIRES</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">ART DE TABLE</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-blue-50">
              <Search className="h-5 w-5 text-slate-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-blue-50">
              <Heart className="h-5 w-5 text-slate-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-blue-50">
              <ShoppingBag className="h-5 w-5 text-slate-600" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-blue-50">
              <Menu className="h-5 w-5 text-slate-600" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
