import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  ProductInfoArticle,
  ProductInfoFinancePrice,
  ProductInfoStock,
  ProductInfoStockLabel,
  ProductInfoAction,
  ProductInfoActionButton,
  ProductTitle,
  ProductImageContainer,
  ProductImageContainerImage,
  ProductInfo,
  ProductInfoHeading,
} from "./ProductDetailsStyle";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext.jsx";

interface iProps {
  title: "string";
  image: "string";
  spec: any;
  features: any;
  price: "any";
  stock: "number";
  id: number;
}

export default function CategoryProduct({
  id,
  title,
  image,
  spec,
  features,
  price,
  stock,
}: iProps) {
  const navigate = useNavigate();
  const { addProduct } = useContext(CartContext);

  return (
    <>
      <ProductInfoArticle>
        <ProductTitle>
          <Link to={`/products/${id}`}>{title}</Link>
        </ProductTitle>

        <figure>
          <ProductImageContainer>
            <ProductImageContainerImage src={`/assets/${image}`} alt={title} />
          </ProductImageContainer>
        </figure>

        <aside>
          <ProductInfo>
            <ProductInfoHeading> Dimensions </ProductInfoHeading>
            <label> {spec.dimensions} </label>
          </ProductInfo>

          {spec.capacity && (
            <ProductInfo>
              <ProductInfoHeading>Capacity</ProductInfoHeading>
              <label> {spec.capacity}</label>
            </ProductInfo>
          )}

          <div className="category_product_info_features">
            <ProductInfoHeading>Features</ProductInfoHeading>
            <ul>
              {features.map((f: any, i: any) => (
                <li key={i}> {f} </li>
              ))}
            </ul>
          </div>
        </aside>

        <aside className="category_product_info_finance">
          <ProductInfoFinancePrice>&pound; {price}</ProductInfoFinancePrice>

          <ProductInfoStock>
            <ProductInfoStockLabel>Stock level: {stock}</ProductInfoStockLabel>
            <ProductInfoStockLabel> Free Delivery </ProductInfoStockLabel>
          </ProductInfoStock>

          <ProductInfoAction>
            <ProductInfoActionButton
              onClick={() => navigate(`/products/${id}`)}
            >
              View Product
            </ProductInfoActionButton>
            <ProductInfoActionButton
              onClick={() => addProduct({ id, title, price })}
            >
              Add to basket
            </ProductInfoActionButton>
          </ProductInfoAction>
        </aside>
      </ProductInfoArticle>
    </>
  );
}
