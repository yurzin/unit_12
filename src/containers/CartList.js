import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectGoods} from '../store/goodsSlice';
import {selectCart, decrement, clearCart} from '../store/cartSlice';
import Cart from "../components/Cart";

/**
 * @return {null}
 */
function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    // переиндексирую массив товара
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    const clickHandler = item => dispatch(decrement(item));

    const deleteGoods = item => dispatch(clearCart(item));

    const isEmpty = obj => {
        let sum = 0;
        for (let key in obj) {
            sum += obj[key];
        }
        return sum;
    };

    if (isEmpty(cart) !== 0) {
        return (
            <Cart
                cart={cart}
                goodsObj={goodsObj}
                clickHandler={clickHandler}
                deleteGoods={deleteGoods}
            />
        )
    } else {
        return null;
    }
}

export default CartList;