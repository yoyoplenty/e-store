import { useContext } from "react";
import { CartContext } from "../../context";

const CartItem = ({ data }: any) => {
  const { id, name, price, image } = data;

  const { cartItems, handleAddtoCart, handleRemoveFromCart, handleUpdateCartItemSum }: any = useContext(CartContext);
  const cartItemsSum = cartItems[id];

  return (
    <div className="cart-item">
      <img src={image} alt="cart-img" />
      <div className="cart-details">
        <p className="fw-bold">{name}</p>
        <p className="fw-bold text-secondary">${price}</p>
        <div className="cart-count d-flex align-items-center">
          <button className="btn btn-sm" onClick={() => handleRemoveFromCart(id)}>
            -
          </button>
          <input
            value={cartItemsSum}
            onChange={(e) => {
              handleUpdateCartItemSum(Number(e.target.value), id);
            }}
          />
          <button className="btn btn-sm" onClick={() => handleAddtoCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
