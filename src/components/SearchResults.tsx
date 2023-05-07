import React, { useState } from "react";
import { getProductsByQuery } from "../fetcher";
import { useSearchParams } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";

export default function SearchResults() {
  const [products, setProducts] = useState({ data: [], error: "" });
  const [searchParams] = useSearchParams();
  const query = searchParams.get("searchQuery");

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductsByQuery(query);
      setProducts(responseObject);
    };
    fetchData();
  }, [query]);

  return (
    <>
      {products.error && <div>Error: {products.error}</div>}
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <CategoryProduct key={product.id} {...product} />
        ))}

      {!products.data.length && <div>No result Found</div>}
    </>
  );
}
