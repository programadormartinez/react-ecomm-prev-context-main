import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [costTotal, setCostTotal] = useState(0);    
    const addToCart = (item, qty) => {
        let costProduct = item.cost * qty;
        const filtredData = cartList.filter(itemcart => itemcart.id == item.id);
        if (!filtredData.length) {
            setCartList([...cartList, {qty: qty,...item, costProduct}]);
        }else{
            filtredData[0].qty = filtredData[0].qty + qty;
            costProduct = item.cost * filtredData[0].qty ;
            setCartList(filtredData);
        }
        setCostTotal(costTotal + costProduct);
    }

    const deletedProduct = (id) => {
        const filtredData = cartList.filter(item => item.id !== id);
        setCartList(filtredData);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, deletedProduct, costTotal}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;