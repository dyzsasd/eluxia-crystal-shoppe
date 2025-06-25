
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/60 to-purple-800/80"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1920&h=1080&fit=crop')"
        }}
      ></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fbbf24' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='20'/%3E%3Ccircle cx='60' cy='60' r='40'/%3E%3Ccircle cx='60' cy='60' r='55'/%3E%3Cpath d='M60 5 L60 115 M5 60 L115 60'/%3E%3Cpath d='M17.6 17.6 L102.4 102.4 M102.4 17.6 L17.6 102.4'/%3E%3Cg transform='rotate(45 60 60)'%3E%3Cpath d='M60 20 L60 100 M20 60 L100 60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23a855f7' stroke-width='0.5'%3E%3Cpath d='M100 20 Q180 100 100 180 Q20 100 100 20'/%3E%3Cpath d='M20 100 Q100 20 180 100 Q100 180 20 100'/%3E%3Ccircle cx='100' cy='100' r='30' fill='%23a855f7' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-yellow-300 font-light tracking-wider">神圣几何</span>
            <span className="block bg-gradient-to-r from-yellow-300 via-amber-300 to-purple-300 bg-clip-text text-transparent font-black">
              琉璃艺境
            </span>
          </h2>
          <p className="text-xl mb-8 text-yellow-100 font-light leading-relaxed tracking-wide">
            融合神圣几何之美，承载东方哲学智慧。每一件作品都是宇宙和谐的完美体现
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-yellow-100 font-bold transition-all duration-300 px-10 py-4 text-lg border-2 border-yellow-400/50 shadow-2xl"
          >
            探索神韵
          </Button>
        </div>
      </div>
    </section>
  );
};
