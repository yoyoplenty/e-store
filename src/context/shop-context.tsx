import { createContext, useState } from "react";
import { PRODUCTS } from "../data/product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart: any = {};
  for (const product of PRODUCTS) {
    cart[product.id] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId: any) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: any) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemSum = (newSum: any, itemId: any) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: newSum }));
  };

  const getTotalCartCost = () => {
    let totalCost = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo: any = PRODUCTS.find((product) => product.id === Number(item));
        totalCost += cartItems[item] * itemInfo?.price;
      }
    }
    return totalCost;
  };

  const contextValue: any = { cartItems, addToCart, removeFromCart, updateCartItemSum, getTotalCartCost };
  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
