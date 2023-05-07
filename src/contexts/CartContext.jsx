import { createContext, useReducer } from "react";
import { CartReducerFunction } from './CartReducer';

export const CartContext = createContext();

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = { cartItems: storage };

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducerFunction, initialState);

  const addProduct = (payload) => {
    dispatch({ type: 'ADD', payload })
    return state.cartItems
  };

  const removeProduct = (payload) => {
    dispatch({ type: 'REMOVE', payload })
    return state.cartItems
  };

  const increaseQuantity = (payload) => {
    dispatch({ type: 'INCQTY', payload })
    return state.cartItems
  };

  const decreaseQuantity = (payload) => {
    dispatch({ type: 'DECQTY', payload })
    return state.cartItems
  };

  const clearBasket = () => {
    dispatch({ type: 'CLEAR', payload: undefined })
    return state.cartItems
  };

  const getCartItems = () => state.cartItems;

  const contextValue = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearBasket,
    getCartItems,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
