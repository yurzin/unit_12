import React, {useState} from "react";

const Cart = ({cart, goodsObj, clickHandler, deleteGoods}) => {

    const [sum, setSum] = useState(0);

        return (
            <table className="table text-center">
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
                        console.log(goodsObj[item]['cost'] * cart[item]);
                        return (
                            <tr key={item + goodsObj[item]['title']}>
                                <td>{goodsObj[item]['title']}<img style={{height: 20, marginLeft: 10}}
                                                                  src={goodsObj[item]['image']}
                                                                  alt={goodsObj[item]['title']}/></td>
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
                <tr>
                    <td style={{fontWeight: 'bold'}}>Итого:</td>
                    <td style={{fontWeight: 'bold'}}> {sum} руб.</td>
                </tr>
                </tbody>
            </table>
        )
};

export default Cart;