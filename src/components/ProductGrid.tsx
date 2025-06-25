
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Vitrail Lumière Céleste",
    price: "489 €",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=400&fit=crop",
    category: "Collection Moderne"
  },
  {
    id: 2,
    name: "Panneau Art Déco Cristal",
    price: "624 €",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=400&fit=crop",
    category: "Héritage Classique"
  },
  {
    id: 3,
    name: "Rosace Cathédrale Moderne",
    price: "892 €",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=400&fit=crop",
    category: "Pièces Signature"
  },
  {
    id: 4,
    name: "Vitrail Géométrique Prisme",
    price: "356 €",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=400&fit=crop",
    category: "Collection Moderne"
  }
];

export const ProductGrid = () => {
  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-serif font-bold text-slate-800 mb-4">
            Nos Créations Exclusives
          </h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Chaque pièce est une œuvre d'art unique, créée avec passion par nos maîtres verriers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white transition-all duration-300 backdrop-blur-sm"
                >
                  <Heart className="h-5 w-5 text-slate-600 group-hover:text-red-500 transition-colors" />
                </Button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-blue-600 font-medium mb-2">{product.category}</p>
                <h4 className="text-lg font-serif font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h4>
                <p className="text-xl font-bold text-slate-900">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
