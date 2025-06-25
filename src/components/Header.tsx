
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-md border-b border-gold-400/30 sticky top-0 z-50 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fbbf24' stroke-width='1'%3E%3Ccircle cx='30' cy='30' r='10'/%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M18.8 18.8 L41.2 41.2 M41.2 18.8 L18.8 41.2'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-200 bg-clip-text text-transparent tracking-wider">
              雅居 MAISON ELUXIA
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-yellow-200 hover:text-yellow-300 transition-colors font-medium tracking-wide">新品</a>
              <a href="#" className="text-yellow-200 hover:text-yellow-300 transition-colors font-medium tracking-wide">收藏</a>
              <a href="#" className="text-yellow-200 hover:text-yellow-300 transition-colors font-medium tracking-wide">琉璃艺术</a>
              <a href="#" className="text-yellow-200 hover:text-yellow-300 transition-colors font-medium tracking-wide">灯饰</a>
              <a href="#" className="text-yellow-200 hover:text-yellow-300 transition-colors font-medium tracking-wide">茶具</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-purple-800/30 text-yellow-200">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-purple-800/30 text-yellow-200">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-purple-800/30 text-yellow-200">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-purple-800/30 text-yellow-200">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
