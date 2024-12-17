import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-lg">
      <Link href="/productdetail">
        {/* The entire card (including the image) is clickable */}
        <div className="cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            width = {350}
            height = {48}
            className="object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-700">{product.price}</p>
        </div>
      </Link>
    </div>
  );
}
