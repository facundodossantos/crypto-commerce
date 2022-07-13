const Item = ({ item, greeting }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-violet-100">
      <img className="w-full" src={item.image} alt={item.description} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-sm
        ">{item.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-700 text-base">{greeting}</p>
      </div>
    </div>
  );
};

export default Item;
