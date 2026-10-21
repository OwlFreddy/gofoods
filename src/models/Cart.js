import CartItem from './CartItem'
import { formatPrice } from '../utils/formatPrice'

export default class Cart {
    constructor(items = []) {
        this.items = items
    }

    getRestaurantId() {
        return this.items.length > 0 ? this.items[0].menuItem.restaurantId : null
    }

    conflictsWith(menuItem) {
        return !this.isEmpty() && this.getRestaurantId() !== menuItem.restaurantId
    }

    getQuantity(menuItemId) {
        const found = this.items.find((i) => i.menuItem.id === menuItemId)
        return found ? found.quantity : 0
    }

    addItem(menuItem) {
        if (this.conflictsWith(menuItem)) return this

        const existing = this.items.find((i) => i.menuItem.id === menuItem.id)
        if (existing) {
            return this.updateQuantity(menuItem.id, existing.quantity + 1)
        }
        return new Cart([...this.items, new CartItem({ menuItem })])
    }

    removeItem(menuItemId) {
        return new Cart(this.items.filter((i) => i.menuItem.id !== menuItemId))
    }

    updateQuantity(menuItemId, quantity) {
        if (quantity <= 0) return this.removeItem(menuItemId)
        return new Cart(
            this.items.map((i) =>
                i.menuItem.id === menuItemId
                    ? new CartItem({ menuItem: i.menuItem, quantity })
                    : i
            )
        )
    }

    clear() {
        return new Cart()
    }

    isEmpty() {
        return this.items.length === 0
    }

    getTotalItems() {
        return this.items.reduce((sum, i) => sum + i.quantity, 0)
    }

    getSubtotal() {
        return this.items.reduce((sum, i) => sum + i.getSubtotal(), 0)
    }

    // Subtotal plus the restaurant's delivery fee (fee defaults to 0)
    getTotal(deliveryFee = 0) {
        return this.getSubtotal() + deliveryFee
    }

    getFormattedSubtotal() {
        return formatPrice(this.getSubtotal())
    }

    getFormattedTotal(deliveryFee = 0) {
        return formatPrice(this.getTotal(deliveryFee))
    }
}