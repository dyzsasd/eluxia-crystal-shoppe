
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-red-900/95 via-amber-900/95 to-red-900/95 backdrop-blur-md border-b border-amber-400/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent tracking-wider">
              雅居 MAISON ELUXIA
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-amber-100 hover:text-yellow-300 transition-colors font-medium tracking-wide">新品</a>
              <a href="#" className="text-amber-100 hover:text-yellow-300 transition-colors font-medium tracking-wide">收藏</a>
              <a href="#" className="text-amber-100 hover:text-yellow-300 transition-colors font-medium tracking-wide">琉璃艺术</a>
              <a href="#" className="text-amber-100 hover:text-yellow-300 transition-colors font-medium tracking-wide">灯饰</a>
              <a href="#" className="text-amber-100 hover:text-yellow-300 transition-colors font-medium tracking-wide">茶具</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-amber-800/30 text-amber-100">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-amber-800/30 text-amber-100">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-amber-800/30 text-amber-100">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-amber-800/30 text-amber-100">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
