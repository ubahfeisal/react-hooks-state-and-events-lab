import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  const inTheCart = () => {
    setInCart(!inCart);
  }
  return (
    <div>
      <li className={inCart ? "in-cart" : ""}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button className="add" onClick={inTheCart}>
          {inCart ? "Remove From Cart" : "Add to Cart"}
        </button>
      </li>
    </div >
  );
}

export default Item;