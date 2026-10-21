import { CURRENCY, formatPrice } from '../utils/formatPrice'

export default class Restaurant {
    constructor({ id, name, cuisine, rating, priceLevel, deliveryMin, deliveryMax, deliveryFee, image, description }) {
        this.id = id
        this.name = name
        this.cuisine = cuisine
        this.rating = rating
        this.priceLevel = priceLevel
        this.deliveryMin = deliveryMin
        this.deliveryMax = deliveryMax
        this.deliveryFee = deliveryFee
        this.image = image
        this.description = description
        this.deliveryTime = deliveryMin
    }

    getMenu(menuItems) {
        return menuItems.filter((item) => item.restaurantId === this.id)
    }

    getPriceSymbol() {
        return CURRENCY.repeat(this.priceLevel)
    }

    getDeliveryRange() {
        return `${this.deliveryMin}–${this.deliveryMax}`
    }

    getFormattedDeliveryFee() {
        return formatPrice(this.deliveryFee)
    }
}