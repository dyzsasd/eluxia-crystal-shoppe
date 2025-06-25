
import { Plus } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-950 via-red-900 to-amber-900 border-t-2 border-amber-600/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-amber-200 text-lg flex items-center justify-between tracking-wide">
              安全支付
              <Plus className="h-4 w-4 md:hidden text-amber-400" />
            </h4>
            <div className="text-sm text-amber-100/80 space-y-2 hidden md:block">
              <p>银联卡支付</p>
              <p>支付宝</p>
              <p>微信支付</p>
              <p>分期付款服务</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-amber-200 text-lg flex items-center justify-between tracking-wide">
              尊享配送
              <Plus className="h-4 w-4 md:hidden text-amber-400" />
            </h4>
            <div className="text-sm text-amber-100/80 space-y-2 hidden md:block">
              <p>专业包装保护</p>
              <p>全程保险运输</p>
              <p>白手套配送</p>
              <p>专业安装服务</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-amber-200 text-lg flex items-center justify-between tracking-wide">
              客户服务
              <Plus className="h-4 w-4 md:hidden text-amber-400" />
            </h4>
            <div className="text-sm text-amber-100/80 space-y-2 hidden md:block">
              <p>专属客服团队</p>
              <p>保养维护指南</p>
              <p>私人定制服务</p>
              <p>终身品质保证</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-amber-200 text-lg flex items-center justify-between tracking-wide">
              雅居文化
              <Plus className="h-4 w-4 md:hidden text-amber-400" />
            </h4>
            <div className="text-sm text-amber-100/80 space-y-2 hidden md:block">
              <p>工坊参观体验</p>
              <p>大师工艺传承</p>
              <p>琉璃艺术历史</p>
              <p>文化传承使命</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-600/30 mt-12 pt-8 text-center">
          <p className="text-sm text-amber-200/70">
            © 2024 雅居 Maison Eluxia. 版权所有 | 服务条款 | 隐私政策 | 传承东方美学，铸就永恒经典
          </p>
        </div>
      </div>
    </footer>
  );
};
