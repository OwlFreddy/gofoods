export default class Restaurant {
    constructor({ id, name, cuisine, rating, priceLevel, deliveryTime, image, description }) {
        this.id = id
        this.name = name
        this.cuisine = cuisine
        this.rating = rating
        this.priceLevel = priceLevel
        this.deliveryTime = deliveryTime
        this.image = image
        this.description = description
    }
    getMenu(menuItems) {
        return menuItems.filter((item) => item.restaurantId === this.id)
    }

    getPriceSymbol() {
        return '₱'.repeat(this.priceLevel)
    }
}