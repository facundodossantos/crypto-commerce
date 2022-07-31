import { BsFillCartFill } from "react-icons/bs";
import "./cartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <BsFillCartFill onClick={() => navigate(`/cart`)} className="icon text-gray-600 hover:text-blue-600 ml-10 cursor-pointer hover:scale-150" />
      <span className="badge badge-warning" id="lblCartCount">
        {" "}
        {cartItems.length}{" "}
      </span>
    </>
  );
};

export default CartWidget;
