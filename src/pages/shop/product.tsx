import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

interface iProduct {
  id: number;
  name: string;
  price: number;
  image: any;
}

interface iProps {
  data: iProduct;
}

const Product = ({ data }: iProps) => {
  const { id, name, price, image } = data;

  const { addToCart, cartItems }: any = useContext(ShopContext);
  const cartItemsSum = cartItems[id];

  return (
    <div className="product">
      <img src={image} alt="product-img" />
      <div className="product-details">
        <p className="fw-bold">{name}</p>
        <p className="text-muted fw-bold">${price}</p>
      </div>
      <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemsSum > 0 && <>({cartItemsSum})</>}
      </button>
    </div>
  );
};

export default Product;
