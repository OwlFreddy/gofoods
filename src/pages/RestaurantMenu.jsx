import { useState } from 'react'
import { Link, useParams } from 'react-router'
import restaurants from '../data/restaurants'
import menuItems from '../data/menuItems'
import categories from '../data/categories'
import ImageWithFallback from '../components/ImageWithFallback'
import MenuItemCard from '../components/MenuItemCard'
import Icon from '../components/Icon'
import { useCart } from '../context/CartContext'
import content from '../content/content'

const ALL = 'all'

export default function RestaurantMenu() {
    const { id } = useParams()
    const { cart, cartRestaurant } = useCart()
    const [category, setCategory] = useState(ALL)

    const restaurant = restaurants.find((r) => r.id === Number(id))

    if (!restaurant) {
        return (
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
                <p className="text-gray-600">{content.menu.notFound}</p>
                <Link to="/restaurants" className="mt-2 inline-block text-orange-600 underline">
                    {content.menu.backButton}
                </Link>
            </div>
        )
    }

    const menu = restaurant.getMenu(menuItems)

    const availableCategories = categories.filter((c) =>
        menu.some((item) => item.categoryId === c.id)
    )

    const activeCategory = availableCategories.some((c) => c.id === category) ? category : ALL

    const visibleItems = menu.filter(
        (item) => activeCategory === ALL || item.categoryId === activeCategory
    )

    const tabClass = (active) =>
        `rounded-full border px-4 py-1.5 text-sm font-medium ${
            active
                ? 'border-orange-500 bg-orange-100 text-orange-700'
                : 'bg-white text-gray-700 hover:border-orange-500'
        }`

    return (
        <div>
            {/* Banner */}
            <ImageWithFallback
                src={restaurant.image}
                alt={restaurant.name}
                label={content.menu.bannerLabel}
                className="h-32 w-full sm:h-48"
            />

            {/* Header */}
            <section className="mx-auto max-w-6xl px-4 pt-5 sm:px-6">
                <Link to="/restaurants" className="text-sm font-medium text-orange-600 hover:underline">
                    {content.menu.backButton}
                </Link>

                <h1 className="mt-3 font-heading text-3xl font-bold text-gray-900">{restaurant.name}</h1>

                <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600">
          <span className="flex items-center gap-1 font-semibold text-gray-900">
            <Icon name="star" filled className="h-4 w-4 text-amber-400" />
              {restaurant.rating}
          </span>
                    <span>
            {restaurant.cuisine} {content.symbols.separator}{' '}
                        <span className="font-semibold text-gray-800">{restaurant.getPriceSymbol()}</span>
          </span>
                    <span className="flex items-center gap-1">
            <Icon name="clock" className="h-4 w-4" />
                        {restaurant.getDeliveryRange()} {content.restaurants.deliveryUnit}
          </span>
                </p>

                <p className="mt-2 max-w-2xl text-sm text-gray-600">{restaurant.description}</p>
            </section>

            {/* Category tabs */}
            <div className="mt-5 border-b">
                <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pb-4 sm:px-6">
                    <button onClick={() => setCategory(ALL)} className={tabClass(activeCategory === ALL)}>
                        {content.menu.allOption}
                    </button>
                    {availableCategories.map((c) => (
                        <button key={c.id} onClick={() => setCategory(c.id)} className={tabClass(activeCategory === c.id)}>
                            {c.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Dishes + order sidebar */}
            <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-24 pt-6 sm:px-6 lg:grid-cols-[1fr_280px] lg:pb-10">
                <div>
                    {visibleItems.length === 0 ? (
                        <p className="text-gray-600">{content.menu.noItems}</p>
                    ) : (
                        <div className="grid gap-4 md:grid-cols-2">
                            {visibleItems.map((item) => (
                                <MenuItemCard key={item.id} item={item} />
                            ))}
                        </div>
                    )}
                </div>

                <aside className="h-fit rounded-xl border bg-white p-4 shadow-sm lg:sticky lg:top-4">
                    <h2 className="font-heading text-lg font-bold text-gray-900">{content.menu.yourOrder}</h2>

                    {cart.isEmpty() ? (
                        <p className="mt-3 text-sm text-gray-500">{content.menu.emptyOrder}</p>
                    ) : (
                        <>
                            <p className="text-xs text-gray-500">
                                {content.menu.from} {cartRestaurant?.name}
                            </p>

                            <ul className="mt-3 space-y-2 text-sm">
                                {cart.items.map((cartItem) => (
                                    <li key={cartItem.menuItem.id} className="flex justify-between gap-2">
                    <span>
                      {cartItem.quantity}
                        {content.symbols.times} {cartItem.menuItem.name}
                    </span>
                                        <span className="font-medium">{cartItem.getFormattedSubtotal()}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-4 flex justify-between border-t pt-3 font-semibold">
                                <span>{content.menu.subtotal}</span>
                                <span>{cart.getFormattedSubtotal()}</span>
                            </p>

                            <Link
                                to="/cart"
                                className="mt-4 block rounded-lg bg-orange-500 py-2 text-center font-semibold text-white hover:bg-orange-600"
                            >
                                {content.menu.goToCart}
                            </Link>
                        </>
                    )}
                </aside>
            </div>

            {/* Phone only: the sidebar sits below the dishes, so keep a shortcut to the cart in reach */}
            {!cart.isEmpty() && (
                <Link
                    to="/cart"
                    className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-between gap-3 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg lg:hidden"
                >
                    <span>{cart.getTotalItems()} {content.menu.itemsInCart}</span>
                    <span>{cart.getFormattedSubtotal()}</span>
                    <span>{content.menu.viewCart} {content.symbols.arrow}</span>
                </Link>
            )}
        </div>
    )
}