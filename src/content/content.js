const content = {
    appName: 'GoFoods',
    tagline: 'Your favorite food, delivered fast.',

    nav: {
        home: 'Home',
        restaurants: 'Restaurants',
        cart: 'Cart',
    },

    home: {
        heroTitle: 'Hungry? Let’s fix that.',
        heroSubtitle: 'Browse restaurants, pick your favorites, and order in minutes.',
        heroButton: 'Browse Restaurants',
        featuredTitle: 'Top Rated Restaurants',
        categoriesTitle: 'Browse by Category',
        viewAll: 'View all',
    },

    restaurants: {
        title: 'All Restaurants',
        searchPlaceholder: 'Search restaurants or dishes…',
        cuisineLabel: 'Cuisine',
        priceLabel: 'Price',
        sortLabel: 'Sort by',
        allOption: 'All',
        sortOptions: [
            { value: 'rating', label: 'Highest rated' },
            { value: 'deliveryTime', label: 'Fastest delivery' },
            { value: 'price', label: 'Lowest price' },
        ],
        noResults: 'No restaurants match your filters.',
        clearFilters: 'Clear filters',
        deliveryUnit: 'min',
        categoryLabel: 'Category',
        resultsCount: 'restaurants found',
    },

    menu: {
        backButton: '← Back to restaurants',
        categoryLabel: 'Category',
        vegetarianOnly: 'Vegetarian only',
        vegetarianBadge: 'Vegetarian',
        spicyBadge: 'Spicy',
        addToCart: 'Add to cart',
        noItems: 'No dishes found.',
        allOption: 'All',
        notFound: 'Restaurant not found.',
        viewCart: 'View cart',
        itemsInCart: 'items in cart',
    },

    cart: {
        title: 'Your Cart',
        empty: 'Your cart is empty.',
        emptyButton: 'Start ordering',
        subtotal: 'Total',
        remove: 'Remove',
        checkoutButton: 'Checkout',
        clearButton: 'Clear cart',
    },

    checkout: {
        title: 'Checkout',
        nameLabel: 'Full name',
        addressLabel: 'Delivery address',
        placeOrder: 'Place order',
        summaryTitle: 'Order summary',
        requiredMessage: 'Please fill in all fields.',
    },

    confirmation: {
        title: 'Order placed!',
        message: 'Thank you! Your food is being prepared.',
        orderNumber: 'Order #',
        backHome: 'Back to home',
    },

    notFound: {
        title: 'Page not found',
        message: 'The page you’re looking for doesn’t exist.',
        button: 'Go home',
    },

    common: {
        noImage: 'No image',
    },

    footer: '© 2026 GoFoods. Made for a class project.',
}

export default content