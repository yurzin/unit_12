import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectGoods} from '../store/goodsSlice';
import {selectCart, decrement} from '../store/cartSlice';
import Cart from "../components/Cart";

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    // переиндексирую массив товара
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    let clickHandler = item => {
        //event.preventDefault();
        console.log(item);
        // let t = event.target;
        // if (!t.classList.contains('add-to-cart')) return true;
        dispatch(decrement(item));
    };

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
                ? <Cart cart={cart} goodsObj={goodsObj} clickHandler={clickHandler}/>
                : null
            }
        </div>
    );
}

export default CartList;