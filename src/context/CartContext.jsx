import { createContext, useContext, useState } from 'react'
import Cart from '../models/Cart'
import Order from '../models/Order'

const CartContext = createContext(null)

export function CartProvider({ children }) {
    const [cart, setCart] = useState(new Cart())
    const [lastOrder, setLastOrder] = useState(null)

    const addItem = (menuItem) => setCart((c) => c.addItem(menuItem))
    const removeItem = (menuItemId) => setCart((c) => c.removeItem(menuItemId))
    const updateQuantity = (menuItemId, quantity) =>
        setCart((c) => c.updateQuantity(menuItemId, quantity))
    const clearCart = () => setCart((c) => c.clear())

    const placeOrder = (details) => {
        const order = Order.fromCart(cart, details)
        setLastOrder(order)
        setCart(new Cart())
        return order
    }

    const value = {
        cart,
        lastOrder,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        placeOrder,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
    return useContext(CartContext)
}