import MenuItem from '../models/MenuItem'

const menuItems = [
    // Lechon Haus (1)
    new MenuItem({ id: 101, restaurantId: 1, categoryId: 1, name: 'Lechon Belly', description: 'Crispy pork belly roll with liver sauce.', price: 420, image: '/images/lechon-belly.jpg' }),
    new MenuItem({ id: 102, restaurantId: 1, categoryId: 2, name: 'Pancit Canton', description: 'Stir-fried noodles with vegetables and pork.', price: 220, image: '/images/pancit-canton.jpg' }),
    new MenuItem({ id: 103, restaurantId: 1, categoryId: 4, name: 'Halo-Halo', description: 'Shaved ice with sweet beans, fruit, and leche flan.', price: 150, image: '/images/halo-halo.jpg', isVegetarian: true }),

    // Sakura Ramen House (2)
    new MenuItem({ id: 201, restaurantId: 2, categoryId: 2, name: 'Tonkotsu Ramen', description: 'Pork bone broth, chashu, egg, and scallions.', price: 340, image: '/images/tonkotsu-ramen.jpg' }),
    new MenuItem({ id: 202, restaurantId: 2, categoryId: 3, name: 'Pork Gyoza', description: 'Pan-fried dumplings, six pieces.', price: 180, image: '/images/gyoza.jpg' }),
    new MenuItem({ id: 203, restaurantId: 2, categoryId: 5, name: 'Iced Matcha Latte', description: 'Ceremonial matcha with cold milk.', price: 160, image: '/images/matcha-latte.jpg', isVegetarian: true }),

    // Nonna's Trattoria (3)
    new MenuItem({ id: 301, restaurantId: 3, categoryId: 1, name: 'Margherita Pizza', description: 'Tomato, mozzarella, and fresh basil.', price: 450, image: '/images/margherita.jpg', isVegetarian: true }),
    new MenuItem({ id: 302, restaurantId: 3, categoryId: 2, name: 'Spaghetti Carbonara', description: 'Egg, pecorino, and crispy pancetta.', price: 390, image: '/images/carbonara.jpg' }),
    new MenuItem({ id: 303, restaurantId: 3, categoryId: 4, name: 'Tiramisu', description: 'Espresso-soaked ladyfingers with mascarpone.', price: 210, image: '/images/tiramisu.jpg', isVegetarian: true }),

    // Seoul Kitchen (4)
    new MenuItem({ id: 401, restaurantId: 4, categoryId: 2, name: 'Bibimbap', description: 'Rice bowl with vegetables, beef, and a fried egg.', price: 320, image: '/images/bibimbap.jpg' }),
    new MenuItem({ id: 402, restaurantId: 4, categoryId: 1, name: 'Spicy Pork Bulgogi', description: 'Gochujang-marinated pork grilled to order.', price: 360, image: '/images/bulgogi.jpg', isSpicy: true }),
    new MenuItem({ id: 403, restaurantId: 4, categoryId: 3, name: 'Tteokbokki', description: 'Chewy rice cakes in sweet-spicy sauce.', price: 190, image: '/images/tteokbokki.jpg', isVegetarian: true, isSpicy: true }),
]

export default menuItems