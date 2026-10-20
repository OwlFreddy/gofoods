export default class MenuItem {
    constructor({ id, restaurantId, categoryId, name, description, price, image, isVegetarian = false, isSpicy = false }) {
        this.id = id
        this.restaurantId = restaurantId
        this.categoryId = categoryId
        this.name = name
        this.description = description
        this.price = price
        this.image = image
        this.isVegetarian = isVegetarian
        this.isSpicy = isSpicy
    }

    getFormattedPrice() {
        return '₱' + this.price.toLocaleString('en-PH')
    }
}