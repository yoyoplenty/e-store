import { useReducer } from "react";
import { PRODUCTS } from "../data/product";
import { cartReducer } from "../reducer/shop";
import { CartContext } from ".";

const getDefaultCart = () => {
  let cart: any = {};
  for (const product of PRODUCTS) {
    cart[product.id] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }: any) => {
  const [cartItems, dispatch] = useReducer(cartReducer, getDefaultCart());

  const handleAddtoCart = (itemId: any) => {
    dispatch({ type: "ADD-TO-CART", itemId });
  };

  const handleRemoveFromCart = (itemId: any) => {
    dispatch({ type: "REMOVE-FROM-CART", itemId });
  };

  const handleUpdateCartItemSum = (newSum: any, itemId: any) => {
    dispatch({ type: "UPDATE-CARTITEM-SUM", itemId, newSum });
  };

  const contextValue: any = { cartItems, handleAddtoCart, handleRemoveFromCart, handleUpdateCartItemSum };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default ShopContextProvider;
