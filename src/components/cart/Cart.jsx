import { useEffect } from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const {
    cartItems,
    removeFromCart,
  } = useContext(CartContext);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cartItems, totalPrice]);

  return (
    <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100 m-auto mt-12">
      <h2 className="text-xl font-semibold">Your cart</h2>
      <ul className="flex flex-col divide-y divide-gray-700">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                src={item.image}
                alt={item.name}
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {item.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{item.price} ETH</p>
                    {/* <p className="text-sm line-through text-gray-600">
                    {item.discountedPrice} ETH
                  </p> */}
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span onClick={() => removeFromCart(item)}>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold"> {totalPrice} ETH</span>
        </p>
        <p className="text-sm dark:text-gray-400">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-2 border rounded-md border-violet-400"
        >
          Back
          <span className="sr-only sm:not-sr-only"> to shop</span>
        </button>
        <button
          type="button"
          className="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400"
        >
          <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
