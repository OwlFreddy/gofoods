import { createContext, useContext, useState } from 'react'
import Cart from '../models/Cart'
import Order from '../models/Order'
import restaurants from '../data/restaurants'

const CartContext = createContext(null)

export function CartProvider({ children }) {
    const [cart, setCart] = useState(new Cart())
    const [lastOrder, setLastOrder] = useState(null)
    const [pendingItem, setPendingItem] = useState(null)

    const cartRestaurant = restaurants.find((r) => r.id === cart.getRestaurantId()) || null

    const addItem = (menuItem) => {
        if (cart.conflictsWith(menuItem)) {
            setPendingItem(menuItem)
            return
        }
        setCart((c) => c.addItem(menuItem))
    }

    const confirmReplace = () => {
        setCart(new Cart().addItem(pendingItem))
        setPendingItem(null)
    }

    const cancelReplace = () => setPendingItem(null)

    const removeItem = (menuItemId) => setCart((c) => c.removeItem(menuItemId))
    const updateQuantity = (menuItemId, quantity) =>
        setCart((c) => c.updateQuantity(menuItemId, quantity))
    const clearCart = () => setCart((c) => c.clear())

    const placeOrder = (details) => {
        const order = Order.fromCart(cart, cartRestaurant, details)
        setLastOrder(order)
        setCart(new Cart())
        return order
    }

    const value = {
        cart,
        cartRestaurant,
        lastOrder,
        pendingItem,
        addItem,
        confirmReplace,
        cancelReplace,
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