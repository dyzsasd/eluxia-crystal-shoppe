
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50/30 to-indigo-50/20">
      <Header />
      <Hero />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
