
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-slate-900/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573177104440-ffee2f376098?w=1920&h=1080&fit=crop')"
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            L'Art du Vitrail 
            <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Cristallin
            </span>
          </h2>
          <p className="text-xl mb-8 text-slate-200 font-light">
            Découvrez nos créations uniques en verre coloré, où la lumière danse à travers l'art ancestral du vitrail
          </p>
          <Button 
            size="lg" 
            className="bg-white/90 text-slate-900 hover:bg-white transition-all duration-300 backdrop-blur-sm border border-white/20 px-8 py-3 text-lg font-medium"
          >
            Découvrir maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};
