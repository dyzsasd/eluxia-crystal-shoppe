
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fbbf24' stroke-width='1'%3E%3Ccircle cx='100' cy='100' r='30'/%3E%3Ccircle cx='100' cy='100' r='60'/%3E%3Ccircle cx='100' cy='100' r='90'/%3E%3Cpath d='M100 10 L100 190 M10 100 L190 100'/%3E%3Cpath d='M29.3 29.3 L170.7 170.7 M170.7 29.3 L29.3 170.7'/%3E%3Cg transform='rotate(45 100 100)'%3E%3Cpath d='M100 40 L100 160 M40 100 L160 100'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23a855f7' stroke-width='0.5'%3E%3Cpath d='M150 50 Q250 150 150 250 Q50 150 150 50'/%3E%3Cpath d='M50 150 Q150 50 250 150 Q150 250 50 150'/%3E%3Ccircle cx='150' cy='150' r='40'/%3E%3Ccircle cx='150' cy='150' r='80'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-5xl font-bold mb-6 tracking-wider">
            <span className="block text-yellow-300">神韵传承</span>
            <em className="text-purple-300 font-black not-italic">尊享订阅</em>
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-yellow-100 mb-10 leading-relaxed">
            订阅我们的神韵通讯，探索神圣几何的奥秘，第一时间获悉新品发布与私人定制服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="请输入您的邮箱地址"
              className="flex-1 bg-purple-900/30 border-2 border-purple-600/50 text-white placeholder:text-purple-200 backdrop-blur-sm h-14 text-lg font-medium focus:border-yellow-400"
            />
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-yellow-100 px-10 h-14 font-bold text-lg border-2 border-yellow-400/50 shadow-xl tracking-wide"
            >
              立即订阅
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
