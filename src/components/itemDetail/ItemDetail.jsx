/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Link, useNavigate } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const onAdd = (quantity) => {
    setAmount(quantity);
    console.log(quantity);
    addToCart(item, quantity);
    navigate("/cart");
  };
  return (
    <section className="text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900"
        >
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full rounded sm:h-96 lg:col-span-7 bg-gray-500"
            style={{height: "100%"}}
          />
          <div className="m-auto p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {item.name}
            </h3>
            <span className="text-xs text-gray-400">
              {item.stock} available
            </span>
            <p>{item.description}</p>
            <div className="flex justify-center">
              {amount === 0 ? (
                <div className="px-6 py-4">
                  <ItemCount item={item} onAdd={onAdd} />
                </div>
              ) : (
                <h2>Compraste {amount}</h2>
              )}
            </div>
          </div>
        </a>
      </div>
    </section>
    // <div className="fixed inset-0 z-10 overflow-y-auto">
    //   <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
    //   <div className="flex items-center min-h-screen px-4 py-8">
    //     <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
    //       <Link to={"/"}>
    //         <AiOutlineClose className="absolute top-0 right-0 m-4 cursor-pointer" />
    //       </Link>
    //       <div className="mt-3 sm:flex">
    //         <div className="mt-2 text-center sm:ml-4 sm:text-left">
    //           <div className="m-auto max-w-sm rounded overflow-hidden shadow-lg bg-violet-100 mt-6">
    //             <img
    //               className="w-full"
    //               src={item.image}
    //               alt={item.description}
    //             />
    //             <div className="px-6 py-4">
    //               <div className="font-bold text-xl mb-2">{item.name}</div>
    //               <p className="text-gray-700 text-sm">{item.description}</p>
    //             </div>
    //             {amount === 0 ? (
    //               <div className="px-6 py-4">
    //                 <ItemCount item={item} onAdd={onAdd} />
    //               </div>
    //             ) : (
    //               <h2>Compraste {amount}</h2>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ItemDetail;
