import React from "react";

const Cart = ({cart, goodsObj, clickHandler, deleteGoods}) => {

    let sum = 0;
    for (let key in cart) {
        sum += cart[key];
    }

    if (sum > 0) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Название товара</th>
                <th>Цена (за единицу)</th>
                <th>Количество</th>
                <th>Стоимость всего товара</th>
                <th>Уменьшить количество товара</th>
                <th>Удалить товар</th>
            </tr>
            </thead>
            <tbody>
            {Object.keys(cart).map(item => {
                if (cart[item] > 0) {
                    return (
                        <tr key={item + goodsObj[item]['title']}>
                            <td>{goodsObj[item]['title']}</td>
                            <td>{goodsObj[item]['cost']}</td>
                            <td>{cart[item]}</td>
                            <td>{goodsObj[item]['cost'] * cart[item]}</td>
                            <td style={{color: "red"}}>
                                <i className="fa fa-minus" onClick={clickHandler.bind(null, item)}/>
                            </td>
                            <td style={{color: "red"}}>
                                <i className="fa fa-times" onClick={deleteGoods.bind(null, item)}/>
                            </td>
                        </tr>
                    )
                } else return null
            })
            }
            </tbody>
        </table>
    ) } else return null
};

export default Cart;