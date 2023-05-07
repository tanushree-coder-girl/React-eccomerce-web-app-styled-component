import { useEffect, useState } from "react";
import { getProducts } from "../fetcher";
import CategoryProduct from "../components/CategoryProduct";

export default function Home() {
  const [products, setProducts] = useState({ data: [], error: "" });

  useEffect(() => {
    const fetchData = async () => {
      const productsDAta = await getProducts();
      setProducts(productsDAta);
    };
    fetchData();
  }, []);

  const renderProducts = () => {
    return products.data.map((product: any) => (
      <CategoryProduct key={product.id} {...product} />
    ));
  };

  return (
    <>
      {products.error && <div>Error: {products.error}</div>}
      {products.data && renderProducts()}
    </>
  );
}
