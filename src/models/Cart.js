import CartItem from './CartItem'

export default class Cart {
    constructor(items = []) {
        this.items = items
    }

    addItem(menuItem) {
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

    getTotal() {
        return this.items.reduce((sum, i) => sum + i.getSubtotal(), 0)
    }

    getFormattedTotal() {
        return '₱' + this.getTotal().toLocaleString('en-PH')
    }
}