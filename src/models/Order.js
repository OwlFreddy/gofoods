export default class Order {
    constructor({ id, items, total, customerName, address, status = 'Preparing', placedAt = new Date() }) {
        this.id = id
        this.items = items
        this.total = total
        this.customerName = customerName
        this.address = address
        this.status = status
        this.placedAt = placedAt
    }
np
    static fromCart(cart, { customerName, address }) {
        return new Order({
            id: Date.now(),
            items: cart.items,
            total: cart.getTotal(),
            customerName,
            address,
        })
    }

    getFormattedTotal() {
        return '₱' + this.total.toLocaleString('en-PH')
    }
}