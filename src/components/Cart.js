import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // we can write selector in both ways - this is a way by which a component is subscribing a store in readux
  const readCart = useSelector((store) => store.cart.items);
  //both are same but never ever write like below always write above one and always try to subscribe only a portion of a store as it will be helpful during huge portion of code written in store.
//   const store = useSelector((store) => store);
//   const readCart = store.cart.items;

  console.log(readCart, "----readCart");
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-[100%] ">
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800">Cart</h2>
        <button
          class="ml-8 bg-red-500  text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto ">
        <h2 className="text-xl font-bold text-gray-600 mt-5 text-center">
          {readCart.length === 0 ? "Nothing is added into the Cart" : " "}
        </h2>

        {readCart.map((itm) => (
          <ItemList key={itm?.id} item_list={itm} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
