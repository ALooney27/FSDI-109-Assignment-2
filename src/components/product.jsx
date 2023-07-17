import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  useEffect(function () {
    console.log("Hello I am a product");
  }, []);

  function onQuantityChange(qty) {
    console.log(qty);
    setQuantity(qty);
  }

  function handleAddProduct() {
    console.log("adding product to cart");
  }

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>

      <div className="prices">
        <label>Price:{props.data.price.toFixed(2)}</label>
        <label>Total:{(props.data.price * quantity).toFixed(2)}</label>
      </div>
      <QuantityPicker onChange={onQuantityChange} />
      <button onClick={handleAddProduct} className="btn btn-sm btn-success">
        Add
      </button>
    </div>
  );
}

export default Product;
