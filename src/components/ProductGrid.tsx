
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "凤凰涅槃琉璃屏风",
    price: "¥8,888",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=400&fit=crop",
    category: "宫廷典藏"
  },
  {
    id: 2,
    name: "龙纹祥云琉璃壁画",
    price: "¥12,800",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=400&fit=crop",
    category: "皇家工艺"
  },
  {
    id: 3,
    name: "莲花禅境琉璃圆窗",
    price: "¥15,600",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=400&fit=crop",
    category: "禅意雅韵"
  },
  {
    id: 4,
    name: "如意祥瑞琉璃花窗",
    price: "¥6,888",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=400&fit=crop",
    category: "吉祥如意"
  }
];

export const ProductGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-amber-50/50 to-red-50/30 relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3Ccircle cx='75' cy='25' r='1'/%3E%3Ccircle cx='25' cy='75' r='1'/%3E%3Ccircle cx='75' cy='75' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-red-900 mb-4 tracking-wider">
            匠心珍品
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-red-800 max-w-3xl mx-auto leading-relaxed">
            每一件作品都蕴含着东方文化的深厚底蕴，展现琉璃艺术的永恒魅力
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-2 border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm hover:border-amber-400">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 bg-red-900/80 hover:bg-red-800 text-amber-200 transition-all duration-300 backdrop-blur-sm"
                >
                  <Heart className="h-5 w-5 group-hover:text-yellow-300 transition-colors" />
                </Button>
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-transparent to-amber-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="p-6 bg-gradient-to-b from-white to-amber-50/30">
                <p className="text-sm text-red-700 font-bold mb-2 tracking-wide">{product.category}</p>
                <h4 className="text-lg font-bold text-red-900 mb-3 group-hover:text-amber-800 transition-colors leading-tight">
                  {product.name}
                </h4>
                <p className="text-2xl font-black text-amber-700">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
