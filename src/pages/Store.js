import React from "react";
import { StoreList } from "../helpers/StoreList";
import StoreItem from "../components/StoreItem";
import "../styles/Store.css";

const Store = () => {
  return (
    <div className="store">
      <h1 className="title">Store Kami</h1>
      <div className="storeList">
        {StoreList.map((storeItem, key) => {
          return (
            <StoreItem
              key={key}
              store={storeItem.store}
              lokasi={storeItem.lokasi}
              hp={storeItem.hp}
              jam={storeItem.jam}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Store;
