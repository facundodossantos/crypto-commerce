const ItemDetail = ({ item }) => {
  console.log('item', item);
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="mt-3 sm:flex">
            <div className="mt-2 text-center sm:ml-4 sm:text-left">
              <div className="m-auto max-w-sm rounded overflow-hidden shadow-lg bg-violet-100 mt-6">
                <img
                  className="w-full"
                  src={item[0].image}
                  alt={item[0].description}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item[0].name}</div>
                  <p className="text-gray-700 text-sm">{item[0].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
