import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  category: string;
  brand?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  brand,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="block">
      <Card className="overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative w-full h-56">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <CardTitle className="text-lg font-medium line-clamp-1">{name}</CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-1">{brand || category}</p>

          <div className="mt-2 flex items-center space-x-2">
            <span className="text-base font-semibold text-green-600">{price}</span>
            {originalPrice && (
              <span className="text-sm line-through text-gray-400">{originalPrice}</span>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <button className="w-full rounded-lg bg-primary text-white py-2 text-sm font-medium hover:bg-primary/90">
            View Product
          </button>
        </CardFooter>
      </Card>
    </Link>
  );
}
