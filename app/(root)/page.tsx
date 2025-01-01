import ProductList from "../../components/shared/product/product-list";
import { getLatestProducts } from "../../lib/actions/product.actions";

const Homepage = async () => {
  const products = await getLatestProducts();

  return <ProductList data={products} title="Newest Arrivals" limit={4} />;
};

export default Homepage;
