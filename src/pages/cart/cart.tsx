import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context";
import { PRODUCTS } from "../../data/product";
import CartItem from "./cart-item";
import "./cart.css";

const Cart = () => {
  const { cartItems }: any = useContext(CartContext);

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

  const totalCost = getTotalCartCost();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="py-2">
        <h1 className="fw-bold text-muted">Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {
          // eslint-disable-next-line array-callback-return
          PRODUCTS.map((product: any) => {
            if (cartItems[product.id] !== 0) {
              console.log(cartItems[product.id] !== 0);
              return <CartItem data={product} />;
            }
          })
        }
      </div>
      <div className="checkout text-center">
        <p className="fw-bold text-secondary">Subtotal: ${totalCost}</p>
        <button className="btn btn-sm fw-bold" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
        <button className="btn btn-sm fw-bold">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
