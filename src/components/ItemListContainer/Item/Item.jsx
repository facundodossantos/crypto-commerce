import { useState } from "react";
import Button from "../../button";

const Item = ({ item }) => {

  const [count, setCount] = useState(0);
  const [isInCart, setIsInCart] = useState(false);

  const handleClick = () => {
    setIsInCart(!isInCart);
  };

  const handleCount = () => {
    if (count >= item.stock) return;
    setCount(count + 1);
  };

  const handleDecount = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div className="m-auto max-w-sm rounded overflow-hidden shadow-lg bg-violet-100 mt-6">
      <img className="w-full" src={item.image} alt={item.description} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-sm">
          {item.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Button text={isInCart ? 'Remove from cart' : 'Add to cart'} callback={handleClick} />
      </div>
      <div className="flex justify-center px-6 pt-4 pb-2">
        <Button text="+" callback={handleCount} />
        <p className="m-3 text-xl">{count}</p>
        <Button text="-" callback={handleDecount} />
      </div>
    </div>
  );
};

export default Item;
