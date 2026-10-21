import { formatPrice } from '../utils/formatPrice'

export default class CartItem {
    constructor({ menuItem, quantity = 1 }) {
        this.menuItem = menuItem
        this.quantity = quantity
    }

    getSubtotal() {
        return this.menuItem.price * this.quantity
    }

    getFormattedSubtotal() {
        return formatPrice(this.getSubtotal())
    }
}