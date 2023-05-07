import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsFilterByCategory } from "../fetcher";
import CategoryProduct from "./CategoryProduct";

interface cateogryProps {
  title: "string";
  image: any;
}
export default function Category() {
  const { categoryId } = useParams();
  const [responseObject, setResponseObject] = useState<cateogryProps | any>({
    data: [],
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductsFilterByCategory(categoryId);
      setResponseObject(responseObject);
    };
    fetchData();
  }, [categoryId]);

  const renderProducts = () => {
    return responseObject?.data?.map((product: any) => (
      <CategoryProduct key={product.id} {...product} />
    ));
  };

  return (
    <>
      {responseObject?.error && <div>Error: {responseObject.error}</div>}
      {responseObject?.data && renderProducts()}
    </>
  );
}
