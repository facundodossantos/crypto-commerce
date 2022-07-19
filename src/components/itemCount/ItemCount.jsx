import { useState } from "react";
import Button from "../button"

const ItemCount = ({item}) => {
  const [count, setCount] = useState(0);
  const [isInCart, setIsInCart] = useState(false);
  console.log('STOCK', item);

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
          callback={handleClick}
        />
      </div>
      <div className="flex justify-center px-6 pt-4 pb-2">
        <Button text="+" callback={handleCount} />
        <p className="m-3 text-xl">{count}</p>
        <Button text="-" callback={handleDecount} />
      </div>
    </>
  );
};

export default ItemCount;
