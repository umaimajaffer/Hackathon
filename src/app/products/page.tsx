import { products } from "../data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="text-center py-6 bg-white shadow">
        <h1 className="text-3xl font-bold">New Arrivals</h1>
      </header>
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
