import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = ({ data }: any) => {
  const { id, name, price, image } = data;

  const { addToCart, cartItems, removeFromCart, updateCartItemSum }: any = useContext(ShopContext);
  const cartItemsSum = cartItems[id];

  return (
    <div className="cart-item">
      <img src={image} alt="cart-img" />
      <div className="cart-details">
        <p className="fw-bold">{name}</p>
        <p className="fw-bold text-secondary">${price}</p>
        <div className="cart-count d-flex align-items-center">
          <button className="btn btn-sm" onClick={() => removeFromCart(id)}>
            -
          </button>
          <input
            value={cartItemsSum}
            onChange={(e) => {
              updateCartItemSum(Number(e.target.value), id);
            }}
          />
          <button className="btn btn-sm" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
