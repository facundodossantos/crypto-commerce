/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import nfts from "../../data/items";
import Spinner from "../spinner/spinner";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id: itemId } = useParams();

  useEffect(() => {
    console.log(itemId)
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(nfts);
      }, 1500);
    });

    getItem
      .then((resp) => {
        const item = resp.find((item) => item.id === parseInt(itemId));
        setItem(item);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [itemId]);

  return (
    <div>
      {isLoading ? <Spinner /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;