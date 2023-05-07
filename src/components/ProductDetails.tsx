import { useParams } from "react-router-dom";
import { getProductsByID } from "../fetcher";
import { useState, useEffect, useContext } from "react";
import {
  ProductInfoArticle,
  ProductInfoFinancePrice,
  ProductInfoStock,
  ProductInfoStockLabel,
  ProductInfoAction,
  ProductInfoActionButton,
  ProductInfoDescription,
  ProductTitle,
  ProductImageContainer,
  ProductImageContainerImage,
  ProductInfo,
  ProductInfoHeading,
} from "./ProductDetailsStyle";
import { CartContext } from "../contexts/CartContext";

interface IUser {
  title: "string";
  image: any;
}

export default function ProductDetails() {
  const [data, setData] = useState<IUser | any>([]);

  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductsByID(id);
      setData(responseObject.data);
      setError(responseObject.error);
    };
    fetchData();
  }, [id]);

  const createMarkup = () => {
    return {
      __html: data?.description,
    };
  };

  const { addProduct } = useContext(CartContext);

  return (
    <ProductInfoArticle>
      <ProductTitle>{data?.title}</ProductTitle>
      <figure>
        <ProductImageContainer>
          <ProductImageContainerImage
            src={`../assets/${data?.image}`}
            alt={data?.title}
          />
        </ProductImageContainer>
      </figure>

      <aside>
        <ProductInfo>
          <ProductInfoHeading> Dimensions </ProductInfoHeading>
          <label> {data?.spec?.dimensions} </label>
        </ProductInfo>

        {data?.spec?.capacity && (
          <ProductInfo>
            <ProductInfoHeading>Capacity</ProductInfoHeading>
            <label> {data?.spec?.capacity}</label>
          </ProductInfo>
        )}

        <ProductInfo>
          <ProductInfoHeading>Features</ProductInfoHeading>
          <ul>
            {data?.features?.map((f: any, i: any) => (
              <li key={`feature-${i}`}> {f} </li>
            ))}
          </ul>
        </ProductInfo>
      </aside>

      <aside>
        <ProductInfoFinancePrice>&pound; {data?.price}</ProductInfoFinancePrice>

        <ProductInfoStock>
          <ProductInfoStockLabel>
            Stock level: {data?.stock}
          </ProductInfoStockLabel>
          <ProductInfoStockLabel> Free Delivery </ProductInfoStockLabel>
        </ProductInfoStock>

        <ProductInfoActionButton
          onClick={() =>
            addProduct({ id: data?.id, title: data?.title, price: data?.price })
          }
        >
          Add to basket
        </ProductInfoActionButton>
      </aside>

      <ProductInfoDescription
        dangerouslySetInnerHTML={createMarkup()}
      ></ProductInfoDescription>
    </ProductInfoArticle>
  );
}
