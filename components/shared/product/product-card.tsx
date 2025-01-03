import { PropsWithChildren } from "react";
import { Product } from "../../../db/sample-data";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../../ui/card";
import ProductPrice from "./product-price";

type Props = PropsWithChildren<{
  product: Product;
}>;

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`} />
        <Image
          src={product.images[0]}
          alt={product.name}
          height={300}
          width={300}
          priority
        />
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice value={product.price} />
          ) : (
            <p className="text-destructive">Out of stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
