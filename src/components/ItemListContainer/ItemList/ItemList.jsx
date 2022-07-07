import Item from '../Item/Item';

const ItemList = ({ items, greeting }) => {
    return (
        <div className="flex flex-wrap justify-center mt-6">
        {items.map((item) => (
            <Item key={item.id} item={item} greeting={greeting} />
        ))}
        </div>
    );
}

export default ItemList;