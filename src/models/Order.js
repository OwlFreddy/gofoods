import { formatPrice } from '../utils/formatPrice'

export default class Order {
    constructor({
                    id,
                    restaurant,
                    items,
                    subtotal,
                    deliveryFee,
                    customerName,
                    phone = '',
                    address,
                    paymentMethod = '',
                    notes = '',
                    status = 'Preparing',
                    placedAt = new Date(),
                }) {
        this.id = id
        this.restaurant = restaurant
        this.items = items
        this.subtotal = subtotal
        this.deliveryFee = deliveryFee
        this.customerName = customerName
        this.phone = phone
        this.address = address
        this.paymentMethod = paymentMethod
        this.notes = notes
        this.status = status
        this.placedAt = placedAt
    }

    static fromCart(cart, restaurant, details) {
        return new Order({
            id: Math.floor(10000 + Math.random() * 90000),
            restaurant,
            items: cart.items,
            subtotal: cart.getSubtotal(),
            deliveryFee: restaurant.deliveryFee,
            ...details,
        })
    }

    getTotal() {
        return this.subtotal + this.deliveryFee
    }

    getDisplayId() {
        return `#GF-${this.id}`
    }

    getFormattedDate() {
        return this.placedAt.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        })
    }

    getFormattedSubtotal() {
        return formatPrice(this.subtotal)
    }

    getFormattedDeliveryFee() {
        return formatPrice(this.deliveryFee)
    }

    getFormattedTotal() {
        return formatPrice(this.getTotal())
    }
}