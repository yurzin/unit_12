import React from 'react';
import {useSelector} from 'react-redux';
import {selectGoods} from '../store/goodsSlice';
import {selectCart} from '../store/cartSlice';
import Cart from "../components/Cart";

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    // переиндексирую массив товара
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

    return (
        <div>
            {/*<ul> {Object.keys(cart).map(item => <li key={item + goodsObj[item]['title']}>
                {goodsObj[item]['title']} - {cart[item]}</li>)} </ul>*/}
            {!isEmpty(cart)
                ? <Cart cart={cart} goodsObj={goodsObj}/>
                : null
            }
        </div>
    );
}

export default CartList;