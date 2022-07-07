import ItemList from "./ItemList/ItemList";

const ItemListContainer = ({ items, greeting }) => {
  return (
    <div>
      <ItemList items={items} greeting={greeting}/>
    </div>
  );
}

export default ItemListContainer;