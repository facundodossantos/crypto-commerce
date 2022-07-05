const Item = ({ item }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={item.image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">
          {item.description}
        </p>
      </div>
      {/* <div className="px-6 pt-4 pb-2">
  
      </div> */}
    </div>
  );
};

export default Item;
