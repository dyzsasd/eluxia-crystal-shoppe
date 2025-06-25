
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "曼陀罗智慧琉璃屏风",
    price: "¥18,888",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=400&fit=crop",
    category: "神圣几何"
  },
  {
    id: 2,
    name: "生命之花琉璃壁画",
    price: "¥22,800",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=400&fit=crop",
    category: "宇宙奥秘"
  },
  {
    id: 3,
    name: "莲花禅境圆窗",
    price: "¥25,600",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=400&fit=crop",
    category: "禅意空间"
  },
  {
    id: 4,
    name: "螺旋能量琉璃花窗",
    price: "¥16,888",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=400&fit=crop",
    category: "能量流动"
  }
];

export const ProductGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50/50 to-indigo-50/30 relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%237c3aed'%3E%3Ccircle cx='50' cy='50' r='15' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='25' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='35' stroke-width='0.5'/%3E%3Cpath d='M50 15 L50 85 M15 50 L85 50' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-purple-900 mb-4 tracking-wider">
            神韵珍品
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-xl text-purple-800 max-w-3xl mx-auto leading-relaxed">
            每一件作品都蕴含着神圣几何的奥秘，展现宇宙和谐的永恒之美
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-2 border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm hover:border-purple-400 relative">
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%237c3aed' stroke-width='0.5'%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3C/g%3E%3C/svg%3E")`
                }}
              ></div>
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 bg-purple-900/80 hover:bg-purple-800 text-yellow-200 transition-all duration-300 backdrop-blur-sm"
                >
                  <Heart className="h-5 w-5 group-hover:text-yellow-300 transition-colors" />
                </Button>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="p-6 bg-gradient-to-b from-white to-purple-50/30 relative z-10">
                <p className="text-sm text-purple-700 font-bold mb-2 tracking-wide">{product.category}</p>
                <h4 className="text-lg font-bold text-purple-900 mb-3 group-hover:text-indigo-800 transition-colors leading-tight">
                  {product.name}
                </h4>
                <p className="text-2xl font-black text-purple-700">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
