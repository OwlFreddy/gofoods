export default class CartItem {
    constructor({ menuItem, quantity = 1 }) {
        this.menuItem = menuItem
        this.quantity = quantity
    }

    getSubtotal() {
        return this.menuItem.price * this.quantity
    }

    getFormattedSubtotal() {
        return '₱' + this.getSubtotal().toLocaleString('en-PH')
    }
}