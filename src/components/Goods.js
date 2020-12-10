import React from "react";

function Goods({image, title, cost, articul}) {
    return (
        <div className="goods-block">
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{cost}</p>
            <button className="add-to-cart" data-key={articul}>Add to cart</button>
        </div>
    );
}

export default Goods;