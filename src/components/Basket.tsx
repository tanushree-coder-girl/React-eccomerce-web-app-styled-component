import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiFillDelete,
} from "react-icons/ai";

export default function Basket() {
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  const {
    getCartItems,
    clearBasket,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  useEffect(() => {
    setCartItems(getCartItems());
  }, [getCartItems]);

  const renderCart = () => {
    if (cartItems.length > 0) {
      return cartItems.map((p: any) => {
        return (
          <React.Fragment key={p.id}>
            <div>
              <Link to={`/products/${p.id}`}>{p.title}</Link>
            </div>
            <BasketQty>
              {p.quantity}
              <AiOutlinePlusSquare
                onClick={() => increaseQuantity({ id: p.id })}
                size={20}
              />
              <AiOutlineMinusSquare
                onClick={() => decreaseQuantity({ id: p.id })}
                size={20}
              />
              <AiFillDelete
                size={20}
                onClick={() => removeProduct({ id: p.id })}
              />
            </BasketQty>
            <BasketPrice>&pound; {p.price}</BasketPrice>
          </React.Fragment>
        );
      });
    } else {
      return <div> The basket is currently empty</div>;
    }
  };

  const renderTotal = () => {
    const cartItems = getCartItems();

    return cartItems.reduce((total: any, item: any) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <BasketContainer>
      <BasketTitle> Shopping Basket</BasketTitle>
      <BasketButton onClick={() => navigate("/checkout")}>
        Checkout
      </BasketButton>
      <BasketTable>
        <BasketHeader>
          <h4>Item</h4>
          <h4>Quantity</h4>
          <h4> Price</h4>
        </BasketHeader>
        <BasketHeaderLine />
        <BasketHeader>{renderCart()}</BasketHeader>
        <BasketHeaderLine />
        <BasketButton onClick={() => clearBasket()}> Clear</BasketButton>
        <BasketTotal> Total &pound; {renderTotal()} </BasketTotal>
      </BasketTable>
    </BasketContainer>
  );
}

const BasketContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  // grid-template-columns: 0.1fr 1fr 0.1fr;
`;

const BasketTable = styled.div`
  grid-column: 1 / span 3;
  grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
  column-gap: 20px;
  padding-left: 10px;
`;

const BasketHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
`;

const BasketHeaderLine = styled.hr`
  margin-bottom: 20px;
  border: 1px solid gray;
`;

const BasketTitle = styled.h2`
  display: grid;
  grid-template-columns: 1fr;
`;
const BasketButton = styled.button`
  height: 40px;
  width: 100px;
  display: grid;
  justify-self: end;
`;
const BasketTotal = styled.div``;

const BasketQty = styled.div``;
const BasketPrice = styled.div``;
