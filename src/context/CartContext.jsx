import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const isInCart = (item) => {
        return cartItems.find((cartItem) => cartItem.id === item.id);
    }
    const removeFromCart = (item) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    }
    // const addToCart = (item) => {
    //     if (isInCart(item)) {
    //         return;
    //     }
    //     setCartItems([...cartItems, item]);
    // }
    const addToCart = (item, quantity) => {
        if (isInCart(item)) {
            return;
        }
        setCartItems([...cartItems, { ...item, quantity }]);
    }

    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, isInCart, removeFromCart, addToCart, clearCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;