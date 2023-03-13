import { PRODUCTS } from "../../data/product";
import Product from "./product";
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1 className="fw-bold">YoyoPlenty Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
