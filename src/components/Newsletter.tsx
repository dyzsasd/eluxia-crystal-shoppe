
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 30l15-15v30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-4xl font-serif font-bold mb-4">
            Abonnez-vous à notre <em className="text-blue-300">newsletter</em>
          </h3>
          <p className="text-xl text-slate-300 mb-8">
            Accédez en exclusivité aux dernières créations, aux offres privilégiées et aux secrets de l'art du vitrail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Adresse email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-slate-300 backdrop-blur-sm h-12"
            />
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 font-medium"
            >
              S'abonner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
