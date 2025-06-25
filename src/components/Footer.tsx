
import { Circle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-950 via-indigo-900 to-purple-950 border-t-2 border-purple-600/30 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23a855f7' stroke-width='0.5'%3E%3Ccircle cx='60' cy='60' r='15'/%3E%3Ccircle cx='60' cy='60' r='30'/%3E%3Ccircle cx='60' cy='60' r='45'/%3E%3Cpath d='M60 15 L60 105 M15 60 L105 60'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-yellow-300 text-lg flex items-center justify-between tracking-wide">
              安全支付
              <Circle className="h-4 w-4 md:hidden text-purple-400" />
            </h4>
            <div className="text-sm text-yellow-100/80 space-y-2 hidden md:block">
              <p>银联卡支付</p>
              <p>支付宝</p>
              <p>微信支付</p>
              <p>分期付款服务</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-yellow-300 text-lg flex items-center justify-between tracking-wide">
              尊享配送
              <Circle className="h-4 w-4 md:hidden text-purple-400" />
            </h4>
            <div className="text-sm text-yellow-100/80 space-y-2 hidden md:block">
              <p>专业包装保护</p>
              <p>全程保险运输</p>
              <p>白手套配送</p>
              <p>专业安装服务</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-yellow-300 text-lg flex items-center justify-between tracking-wide">
              客户服务
              <Circle className="h-4 w-4 md:hidden text-purple-400" />
            </h4>
            <div className="text-sm text-yellow-100/80 space-y-2 hidden md:block">
              <p>专属客服团队</p>
              <p>保养维护指南</p>
              <p>私人定制服务</p>
              <p>终身品质保证</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-yellow-300 text-lg flex items-center justify-between tracking-wide">
              雅居文化
              <Circle className="h-4 w-4 md:hidden text-purple-400" />
            </h4>
            <div className="text-sm text-yellow-100/80 space-y-2 hidden md:block">
              <p>工坊参观体验</p>
              <p>大师工艺传承</p>
              <p>神圣几何艺术</p>
              <p>文化传承使命</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-600/30 mt-12 pt-8 text-center">
          <p className="text-sm text-yellow-200/70">
            © 2024 雅居 Maison Eluxia. 版权所有 | 服务条款 | 隐私政策 | 传承神圣几何，铸就永恒经典
          </p>
        </div>
      </div>
    </footer>
  );
};
