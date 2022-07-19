import ItemCount from "../itemCount/ItemCount"

const Item = ({ item }) => {
  return (
    <div className="m-auto max-w-sm rounded overflow-hidden shadow-lg bg-violet-100 mt-6">
      <img className="w-full" src={item.image} alt={item.description} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-sm">
          {item.description}
        </p>
      </div>
      <ItemCount item={item} />
    </div>
  );
};

export default Item;
