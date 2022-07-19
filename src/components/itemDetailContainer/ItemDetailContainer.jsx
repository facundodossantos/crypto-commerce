import React, { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import nfts from "../../data/items";
import Spinner from "../spinner/spinner";

const ItemDetailContainer = ({id}) => {

  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(nfts);
      }, 1500);
    });

    getItem
      .then((resp) => {
        setItem(resp.map(item => item.id === id ? item : null).filter(item => item !== null));
        setIsLoading(false);
        console.log(item);
      })
      .catch((error) => console.log(error));
  }, [id, item]);

  return (
    <div>
      {isLoading ? <Spinner /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;