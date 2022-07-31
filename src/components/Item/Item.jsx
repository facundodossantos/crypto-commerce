/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import EthLogo from "../../assets/eth-icon.jsx";
import "./item.scss";

const Item = ({ item }) => {
  return (
    <>
      <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {item.name}
            </h2>
            <div className="font-bold text-xl mb-2 flex justify-center items-center">
              <EthLogo />
              <p className="m-2 text-white text-sm">{item.price}</p>
            </div>
          </div>
          <Link to={`/item/${item.id}`}>
            <button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">
              Show More
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl border-gray-700 bg-gray-900 hover:bg-gray-700">
    <img className="image-item object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.image} alt=""></img>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{item.name}</h5>
        <div className="font-bold text-xl mb-2 flex justify-center items-center">
            <EthLogo />
            <p className="m-2 text-white text-sm">{item.price}</p>
        </div>
        <Link to={`/item/${item.id}`}>
          <button>Show More</button>
        </Link>
    </div>
    </div> */}
      {/* <div className="card m-auto max-w-sm rounded overflow-hidden shadow-lg bg-violet-100 mt-6">
        <div>
          <img className="w-full" src={item.image} alt={item.description} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.name}</div>
          <div className="font-bold text-xl mb-2 flex justify-center items-center">
            <EthLogo />
            <p className="m-2 text-gray-700 text-sm">{item.price}</p>
          </div>
        </div>
        <ItemCount item={item} />
        <Link to={`/item/${item.id}`}>
          <button>Show More</button>
        </Link>
      </div> */}
    </>
  );
};

export default Item;
