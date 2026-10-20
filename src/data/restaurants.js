import Restaurant from '../models/Restaurant'

const restaurants = [
    new Restaurant({
        id: 1,
        name: 'Lechon Haus',
        cuisine: 'Filipino',
        rating: 4.8,
        priceLevel: 2,
        deliveryTime: 30,
        image: '/images/lechon-haus.jpg',
        description: 'Crispy-skinned lechon and home-style Filipino classics.',
    }),
    new Restaurant({
        id: 2,
        name: 'Sakura Ramen House',
        cuisine: 'Japanese',
        rating: 4.6,
        priceLevel: 2,
        deliveryTime: 25,
        image: '/images/sakura-ramen.jpg',
        description: 'Rich broths, fresh noodles, and crunchy gyoza.',
    }),
    new Restaurant({
        id: 3,
        name: "Nonna's Trattoria",
        cuisine: 'Italian',
        rating: 4.5,
        priceLevel: 3,
        deliveryTime: 40,
        image: '/images/nonnas-trattoria.jpg',
        description: 'Wood-fired pizza and handmade pasta in the Italian tradition.',
    }),
    new Restaurant({
        id: 4,
        name: 'Seoul Kitchen',
        cuisine: 'Korean',
        rating: 4.4,
        priceLevel: 2,
        deliveryTime: 35,
        image: '/images/seoul-kitchen.jpg',
        description: 'Korean BBQ, bibimbap, and spicy comfort food.',
    }),
]

export default restaurants