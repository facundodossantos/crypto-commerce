import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import nfts from "../../data/items";
import Spinner from "../spinner/spinner";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const category = useParams();
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
        if (category.name) {
          setItems(resp.filter((item) => item.category === category.name));
          setIsLoading(false);
        } else {
          setItems(resp);
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [category]);

  return <div>{isLoading ? <Spinner /> : <ItemList items={items} />}</div>;
};

export default ItemListContainer;
