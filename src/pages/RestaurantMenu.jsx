import { useState } from 'react'
import { Link, useParams } from 'react-router'
import restaurants from '../data/restaurants'
import menuItems from '../data/menuItems'
import categories from '../data/categories'
import ImageWithFallback from '../components/ImageWithFallback'
import MenuItemCard from '../components/MenuItemCard'
import { useCart } from '../context/CartContext'
import content from '../content/content'

const ALL = 'all'

export default function RestaurantMenu() {
    const { id } = useParams()
    const { cart } = useCart()

    const [category, setCategory] = useState(ALL)
    const [vegOnly, setVegOnly] = useState(false)

    const restaurant = restaurants.find((r) => r.id === Number(id))

    if (!restaurant) {
        return (
            <div>
                <p className="text-gray-600">{content.menu.notFound}</p>
                <Link to="/restaurants" className="mt-2 inline-block text-orange-500 underline">
                    {content.menu.backButton}
                </Link>
            </div>
        )
    }

    const menu = restaurant.getMenu(menuItems)

    // Only show category buttons this restaurant actually has dishes for
    const availableCategories = categories.filter((c) =>
        menu.some((item) => item.categoryId === c.id)
    )

    const visibleItems = menu.filter(
        (item) =>
            (category === ALL || item.categoryId === category) &&
            (!vegOnly || item.isVegetarian)
    )

    const pillClass = (active) =>
        `rounded-full border px-4 py-1 text-sm ${
            active ? 'border-orange-500 bg-orange-500 text-white' : 'bg-white hover:border-orange-500'
        }`

    return (
        <div className="pb-20">
            <Link to="/restaurants" className="text-sm text-orange-500 hover:underline">
                {content.menu.backButton}
            </Link>

            <div className="mt-4 overflow-hidden rounded-lg border bg-white">
                <ImageWithFallback src={restaurant.image} alt={restaurant.name} className="h-48 w-full" />
                <div className="p-4">
                    <h1 className="text-2xl font-bold">{restaurant.name}</h1>
                    <p className="mt-1 text-sm text-gray-600">
                        ⭐ {restaurant.rating} · {restaurant.cuisine} · {restaurant.getPriceSymbol()} ·{' '}
                        {restaurant.deliveryTime} {content.restaurants.deliveryUnit}
                    </p>
                    <p className="mt-2 text-gray-500">{restaurant.description}</p>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-600">{content.menu.categoryLabel}:</span>
                <button onClick={() => setCategory(ALL)} className={pillClass(category === ALL)}>
                    {content.menu.allOption}
                </button>
                {availableCategories.map((c) => (
                    <button key={c.id} onClick={() => setCategory(c.id)} className={pillClass(category === c.id)}>
                        {c.icon} {c.name}
                    </button>
                ))}

                <label className="ml-auto flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        checked={vegOnly}
                        onChange={(e) => setVegOnly(e.target.checked)}
                    />
                    {content.menu.vegetarianOnly}
                </label>
            </div>

            {visibleItems.length === 0 ? (
                <p className="mt-6 text-gray-600">{content.menu.noItems}</p>
            ) : (
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {visibleItems.map((item) => (
                        <MenuItemCard key={item.id} item={item} />
                    ))}
                </div>
            )}

            {!cart.isEmpty() && (
                <Link
                    to="/cart"
                    className="fixed bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-orange-500 px-6 py-3 text-white shadow-lg hover:bg-orange-600"
                >
                    <span>{cart.getTotalItems()} {content.menu.itemsInCart}</span>
                    <span className="font-semibold">{cart.getFormattedTotal()}</span>
                    <span>{content.menu.viewCart} →</span>
                </Link>
            )}
        </div>
    )
}