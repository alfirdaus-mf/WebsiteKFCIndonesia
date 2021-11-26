import React from 'react';

const StoreItem = ({store, lokasi, hp, jam}) => {
    return (
        <div className="storeItem">
            <h3>{store}</h3>
            <p className="lokasi">{lokasi}</p>
            <p>{hp}</p>
            <p>{jam}</p>
        </div>
    )
}

export default StoreItem
