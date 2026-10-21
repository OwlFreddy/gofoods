import Restaurant from '../models/Restaurant'

const restaurants = [
    new Restaurant({
        id: 1, name: 'Lechon Haus', cuisine: 'Filipino', rating: 4.8, priceLevel: 2,
        deliveryMin: 25, deliveryMax: 35, deliveryFee: 49, image: '/images/lechon-haus.jpg',
        description: 'Cebu-style roast pork, grilled favorites and classic Filipino sides, cooked fresh to order.',
    }),
    new Restaurant({
        id: 2, name: 'Burger Barn', cuisine: 'Burgers', rating: 4.8, priceLevel: 1,
        deliveryMin: 20, deliveryMax: 30, deliveryFee: 49, image: '/images/burger-barn.jpg',
        description: 'Juicy smash burgers, crispy chicken and thick milkshakes.',
    }),
    new Restaurant({
        id: 3, name: 'Pasta Piazza', cuisine: 'Italian', rating: 4.7, priceLevel: 3,
        deliveryMin: 30, deliveryMax: 40, deliveryFee: 49, image: '/images/pasta-piazza.jpg',
        description: 'Handmade pasta and wood-fired pizza in the Italian tradition.',
    }),
    new Restaurant({
        id: 4, name: 'Sakura Bowl', cuisine: 'Japanese', rating: 4.9, priceLevel: 2,
        deliveryMin: 25, deliveryMax: 35, deliveryFee: 49, image: '/images/sakura-bowl.jpg',
        description: 'Rich ramen, rice bowls and crunchy gyoza.',
    }),
    new Restaurant({
        id: 5, name: 'Sinugba Grill', cuisine: 'Filipino', rating: 4.6, priceLevel: 2,
        deliveryMin: 30, deliveryMax: 40, deliveryFee: 49, image: '/images/sinugba-grill.jpg',
        description: 'Charcoal-grilled seafood and meats, Visayan style.',
    }),
    new Restaurant({
        id: 6, name: 'Green Plate', cuisine: 'Healthy', rating: 4.4, priceLevel: 2,
        deliveryMin: 20, deliveryMax: 30, deliveryFee: 49, image: '/images/green-plate.jpg',
        description: 'Fresh salads, grain bowls and smoothies made to order.',
    }),
    new Restaurant({
        id: 7, name: 'Taco Tribu', cuisine: 'Mexican', rating: 4.3, priceLevel: 2,
        deliveryMin: 25, deliveryMax: 35, deliveryFee: 49, image: '/images/taco-tribu.jpg',
        description: 'Street-style tacos, burritos and nachos with house salsas.',
    }),
    new Restaurant({
        id: 8, name: 'Noodle Nook', cuisine: 'Chinese', rating: 4.2, priceLevel: 2,
        deliveryMin: 20, deliveryMax: 30, deliveryFee: 49, image: '/images/noodle-nook.jpg',
        description: 'Hand-pulled noodles, dumplings and comforting soups.',
    }),
]

export default restaurants