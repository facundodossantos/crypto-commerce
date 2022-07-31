import Item from '../Item/Item';

const ItemList = ({ items }) => {
    return (
        <div style={{gap: 80}} className="flex flex-wrap justify-center mt-16">
        {items.map((item) => (
            
            <Item key={item.id} item={item} />
        ))}
        </div>
    );
}

export default ItemList;