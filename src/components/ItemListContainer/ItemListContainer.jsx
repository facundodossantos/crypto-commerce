import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import nfts from "../../data/items";
import Spinner from "../spinner/spinner";

const ItemListContainer = () => {

  let [items, setItems] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const itemsList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(nfts);
      }, 1000);
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
