
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24'%3E%3Cpath d='M60 0C26.863 0 0 26.863 0 60s26.863 60 60 60 60-26.863 60-60S93.137 0 60 0zm0 110C32.386 110 10 87.614 10 60S32.386 10 60 10s50 22.386 50 50-22.386 50-50 50z'/%3E%3Cpath d='M60 20c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 70c-16.569 0-30-13.431-30-30s13.431-30 30-30 30 13.431 30 30-13.431 30-30 30z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-5xl font-bold mb-6 tracking-wider">
            <span className="block text-amber-200">雅韵传承</span>
            <em className="text-yellow-300 font-black not-italic">尊享订阅</em>
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 mx-auto mb-8"></div>
          <p className="text-xl text-amber-100 mb-10 leading-relaxed">
            订阅我们的尊享通讯，第一时间获悉新品发布、私人定制服务及传统工艺的精深奥秘
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="请输入您的邮箱地址"
              className="flex-1 bg-amber-900/30 border-2 border-amber-600/50 text-white placeholder:text-amber-200 backdrop-blur-sm h-14 text-lg font-medium focus:border-yellow-400"
            />
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-red-900 px-10 h-14 font-bold text-lg border-2 border-amber-400/50 shadow-xl tracking-wide"
            >
              立即订阅
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
