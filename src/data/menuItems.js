import MenuItem from '../models/MenuItem'

const menuItems = [

    new MenuItem({ id: 101, restaurantId: 1, categoryId: 1, name: 'Lumpiang Shanghai', description: 'Crispy pork spring rolls with sweet chili dip.', price: 180 }),
    new MenuItem({ id: 102, restaurantId: 1, categoryId: 1, name: 'Crispy Kangkong', description: 'Water spinach fried in a light batter with garlic vinegar.', price: 160, isVegetarian: true }),
    new MenuItem({ id: 103, restaurantId: 1, categoryId: 2, name: 'Lechon Belly', description: 'Slow-roasted pork belly, 500g, served with liver sauce.', price: 420 }),
    new MenuItem({ id: 104, restaurantId: 1, categoryId: 2, name: 'Chicken Inasal', description: 'Charcoal-grilled chicken with annatto oil and garlic rice.', price: 260 }),
    new MenuItem({ id: 105, restaurantId: 1, categoryId: 2, name: 'Pork Sisig', description: 'Chopped grilled pork with onions, calamansi and chili.', price: 290, isSpicy: true }),
    new MenuItem({ id: 106, restaurantId: 1, categoryId: 2, name: 'Kare-Kare', description: 'Oxtail and vegetables in peanut sauce with bagoong.', price: 380 }),
    new MenuItem({ id: 107, restaurantId: 1, categoryId: 3, name: 'Leche Flan', description: 'Silky caramel custard, made daily.', price: 120, isVegetarian: true }),
    new MenuItem({ id: 108, restaurantId: 1, categoryId: 4, name: 'Calamansi Juice', description: 'Fresh-squeezed and lightly sweetened.', price: 90, isVegetarian: true }),

    new MenuItem({ id: 201, restaurantId: 2, categoryId: 1, name: 'Onion Rings', description: 'Beer-battered rings with ranch dip.', price: 110, isVegetarian: true }),
    new MenuItem({ id: 202, restaurantId: 2, categoryId: 2, name: 'Classic Cheeseburger', description: 'Double smash patty, cheddar, pickles and house sauce.', price: 220 }),
    new MenuItem({ id: 203, restaurantId: 2, categoryId: 2, name: 'Crispy Chicken Burger', description: 'Buttermilk fried chicken with slaw on a brioche bun.', price: 240 }),
    new MenuItem({ id: 204, restaurantId: 2, categoryId: 4, name: 'Chocolate Shake', description: 'Thick chocolate milkshake topped with whipped cream.', price: 140, isVegetarian: true }),

    new MenuItem({ id: 301, restaurantId: 3, categoryId: 1, name: 'Garlic Bread', description: 'Toasted ciabatta with garlic butter and parsley.', price: 150, isVegetarian: true }),
    new MenuItem({ id: 302, restaurantId: 3, categoryId: 2, name: 'Spaghetti Carbonara', description: 'Egg, pecorino and crispy pancetta.', price: 390 }),
    new MenuItem({ id: 303, restaurantId: 3, categoryId: 2, name: 'Margherita Pizza', description: 'Tomato, mozzarella and fresh basil.', price: 450, isVegetarian: true }),
    new MenuItem({ id: 304, restaurantId: 3, categoryId: 3, name: 'Tiramisu', description: 'Espresso-soaked ladyfingers with mascarpone.', price: 210, isVegetarian: true }),

    new MenuItem({ id: 401, restaurantId: 4, categoryId: 1, name: 'Pork Gyoza', description: 'Pan-fried dumplings, six pieces.', price: 180 }),
    new MenuItem({ id: 402, restaurantId: 4, categoryId: 2, name: 'Tonkotsu Ramen', description: 'Pork bone broth, chashu, egg and scallions.', price: 340 }),
    new MenuItem({ id: 403, restaurantId: 4, categoryId: 2, name: 'Chicken Katsu Don', description: 'Crispy cutlet over rice with egg and onion.', price: 310 }),
    new MenuItem({ id: 404, restaurantId: 4, categoryId: 4, name: 'Iced Matcha Latte', description: 'Ceremonial matcha with cold milk.', price: 160, isVegetarian: true }),

    new MenuItem({ id: 501, restaurantId: 5, categoryId: 1, name: 'Grilled Squid', description: 'Charcoal-grilled squid with spicy vinegar.', price: 200, isSpicy: true }),
    new MenuItem({ id: 502, restaurantId: 5, categoryId: 2, name: 'Grilled Liempo', description: 'Marinated pork belly grilled over coals.', price: 280 }),
    new MenuItem({ id: 503, restaurantId: 5, categoryId: 2, name: 'Inihaw na Tilapia', description: 'Whole tilapia stuffed with tomato and onion.', price: 260 }),
    new MenuItem({ id: 504, restaurantId: 5, categoryId: 3, name: 'Buko Pandan', description: 'Young coconut and pandan jelly in sweet cream.', price: 110, isVegetarian: true }),

    new MenuItem({ id: 601, restaurantId: 6, categoryId: 1, name: 'Garden Salad', description: 'Mixed greens, cherry tomatoes and citrus dressing.', price: 180, isVegetarian: true }),
    new MenuItem({ id: 602, restaurantId: 6, categoryId: 2, name: 'Quinoa Power Bowl', description: 'Quinoa, roasted vegetables, chickpeas and tahini.', price: 320, isVegetarian: true }),
    new MenuItem({ id: 603, restaurantId: 6, categoryId: 2, name: 'Grilled Salmon Bowl', description: 'Salmon over brown rice with avocado and greens.', price: 380 }),
    new MenuItem({ id: 604, restaurantId: 6, categoryId: 4, name: 'Fruit Smoothie', description: 'Mango, banana and calamansi blended fresh.', price: 150, isVegetarian: true }),

    new MenuItem({ id: 701, restaurantId: 7, categoryId: 1, name: 'Loaded Nachos', description: 'Tortilla chips with cheese, beans and pico de gallo.', price: 190, isVegetarian: true }),
    new MenuItem({ id: 702, restaurantId: 7, categoryId: 2, name: 'Beef Tacos', description: 'Three soft tacos with beef, onion and cilantro.', price: 260 }),
    new MenuItem({ id: 703, restaurantId: 7, categoryId: 2, name: 'Spicy Chicken Burrito', description: 'Chipotle chicken, rice and beans in a flour tortilla.', price: 280, isSpicy: true }),
    new MenuItem({ id: 704, restaurantId: 7, categoryId: 4, name: 'Horchata', description: 'Chilled cinnamon rice drink.', price: 120, isVegetarian: true }),

    new MenuItem({ id: 801, restaurantId: 8, categoryId: 1, name: 'Pork Dumplings', description: 'Steamed dumplings with black vinegar dip.', price: 170 }),
    new MenuItem({ id: 802, restaurantId: 8, categoryId: 2, name: 'Beef Noodle Soup', description: 'Braised beef shank in a rich star anise broth.', price: 260 }),
    new MenuItem({ id: 803, restaurantId: 8, categoryId: 2, name: 'Dan Dan Noodles', description: 'Chili oil noodles with minced pork and peanuts.', price: 240, isSpicy: true }),
    new MenuItem({ id: 804, restaurantId: 8, categoryId: 3, name: 'Mango Pomelo Sago', description: 'Chilled mango, pomelo and sago pearls.', price: 130, isVegetarian: true }),
]

export default menuItems