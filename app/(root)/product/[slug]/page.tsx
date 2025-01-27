import { Badge } from "@/components/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import ProductPrice from "../../../../components/shared/product/product-price";

import { notFound } from "next/navigation";
import { getProductBySlug } from "../../../../lib/actions/product.actions";

// Docs: https://nextjs.org/docs/app/building-your-application/upgrading/version-15#asynchronous-page
type Props = {
  params: Promise<{ slug: string }>;
};

const ProductDetailsPage = async (props: Props) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Images Column */}
          <div className="col-span-2">{/* Images Component */}</div>
          {/* Details Column */}Product
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              <p className="">
                {product.rating} of {product.numReviews}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  value={product.price}
                  className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
