
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/60 via-amber-900/40 to-red-800/60"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1920&h=1080&fit=crop')"
        }}
      ></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Cpath d='M40 0l20 20-20 20-20-20z'/%3E%3Cpath d='M0 40l20 20-20 20-20-20z'/%3E%3Cpath d='M40 40l20 20-20 20-20-20z'/%3E%3Cpath d='M80 40l20 20-20 20-20-20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-amber-200 font-light tracking-wider">琉璃雅韵</span>
            <span className="block bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-200 bg-clip-text text-transparent font-black">
              东方艺境
            </span>
          </h2>
          <p className="text-xl mb-8 text-amber-100 font-light leading-relaxed tracking-wide">
            传承千年工艺，融合现代美学。每一件琉璃艺术品都承载着东方文化的精髓与匠心独运的技艺
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-red-900 font-bold transition-all duration-300 px-10 py-4 text-lg border-2 border-amber-400/50 shadow-2xl"
          >
            探索珍藏
          </Button>
        </div>
      </div>
    </section>
  );
};
