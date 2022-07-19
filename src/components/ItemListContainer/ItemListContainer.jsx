import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import nfts from "../../data/items";
import Spinner from "../spinner/spinner";

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const itemsList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(nfts);
      }, 1500);
    });

    itemsList
      .then((resp) => {
        setItems(resp);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {isLoading ? <Spinner /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
