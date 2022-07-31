import { useState } from "react";
import Button from "../button"

const ItemCount = ({ item, onAdd }) => {
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
    <>
      <div className="px-6 pt-4 pb-2">
        <Button
          text={isInCart ? "Remove from cart" : "Add to cart"}
          callback={() => onAdd(count)}
        />
      </div>
      <div className="flex justify-center px-6 pt-4 pb-2">
        <Button text="-" callback={handleDecount} />
        <p className="m-3 text-xl">{count}</p>
        <Button text="+" callback={handleCount} />
      </div>
    </>
  );
};

export default ItemCount;
