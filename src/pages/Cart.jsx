import { Link } from 'react-router'
import ImageWithFallback from '../components/ImageWithFallback'
import Icon from '../components/Icon'
import { useCart } from '../context/CartContext'
import content from '../content/content'

export default function Cart() {
    const { cart, cartRestaurant, updateQuantity, removeItem, clearCart } = useCart()

    if (cart.isEmpty()) {
        return (
            <div className="py-10 text-center">
                <h1 className="font-heading text-3xl font-bold text-gray-900">{content.cart.title}</h1>
                <p className="mt-2 text-gray-600">{content.cart.empty}</p>
                <Link
                    to="/restaurants"
                    className="mt-4 inline-block rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white hover:bg-orange-600"
                >
                    {content.cart.emptyButton}
                </Link>
            </div>
        )
    }

    const stepButton = 'flex h-8 w-8 items-center justify-center text-base font-semibold hover:bg-orange-50'

    return (
        <div>
            <h1 className="font-heading text-3xl font-bold text-gray-900">{content.cart.title}</h1>
            <p className="mt-1 text-sm text-gray-500">
                {content.cart.orderingFrom} {cartRestaurant.name}
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
                {/* Items */}
                <div>
                    <div className="space-y-3">
                        {cart.items.map((cartItem) => (
                            <div
                                key={cartItem.menuItem.id}
                                className="flex flex-wrap items-center gap-3 rounded-xl border bg-white p-3 shadow-sm sm:flex-nowrap sm:gap-4"
                            >
                                <ImageWithFallback
                                    src={cartItem.menuItem.image}
                                    alt={cartItem.menuItem.name}
                                    className="h-16 w-16 shrink-0 rounded-lg sm:h-20 sm:w-20"
                                />

                                <div className="min-w-0 flex-1">
                                    <h3 className="font-semibold text-gray-900">{cartItem.menuItem.name}</h3>
                                    <p className="text-xs text-gray-500">
                                        {cartItem.menuItem.getFormattedPrice()} {content.cart.each}
                                    </p>
                                </div>

                                <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:gap-5">
                                    <div className="inline-flex items-center overflow-hidden rounded-lg border">
                                        <button
                                            aria-label={content.cart.decreaseLabel}
                                            onClick={() => updateQuantity(cartItem.menuItem.id, cartItem.quantity - 1)}
                                            className={stepButton}
                                        >
                                            {content.symbols.minus}
                                        </button>
                                        <span className="w-8 text-center text-sm font-semibold">{cartItem.quantity}</span>
                                        <button
                                            aria-label={content.cart.increaseLabel}
                                            onClick={() => updateQuantity(cartItem.menuItem.id, cartItem.quantity + 1)}
                                            className={stepButton}
                                        >
                                            {content.symbols.plus}
                                        </button>
                                    </div>

                                    <span className="w-20 text-right font-semibold text-gray-900">
                    {cartItem.getFormattedSubtotal()}
                  </span>

                                    <button
                                        aria-label={content.cart.remove}
                                        onClick={() => removeItem(cartItem.menuItem.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <Icon name="trash" className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-sm font-medium">
                        <Link to={`/restaurants/${cartRestaurant.id}`} className="text-orange-600 hover:underline">
                            {content.cart.continueOrdering}
                        </Link>
                        <button onClick={clearCart} className="text-orange-600 hover:underline">
                            {content.cart.clearButton}
                        </button>
                    </div>
                </div>

                {/* Summary */}
                <aside className="h-fit rounded-xl border bg-white p-4 shadow-sm lg:sticky lg:top-4">
                    <h2 className="font-heading text-lg font-bold text-gray-900">{content.cart.summaryTitle}</h2>

                    <dl className="mt-3 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <dt className="text-gray-600">{content.cart.subtotal}</dt>
                            <dd className="font-medium">{cart.getFormattedSubtotal()}</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-gray-600">{content.cart.deliveryFee}</dt>
                            <dd className="font-medium">{cartRestaurant.getFormattedDeliveryFee()}</dd>
                        </div>
                        <div className="flex justify-between border-t pt-3 text-base font-bold">
                            <dt>{content.cart.total}</dt>
                            <dd>{cart.getFormattedTotal(cartRestaurant.deliveryFee)}</dd>
                        </div>
                    </dl>

                    <Link
                        to="/checkout"
                        className="mt-4 block rounded-lg bg-orange-500 py-2 text-center font-semibold text-white hover:bg-orange-600"
                    >
                        {content.cart.checkoutButton}
                    </Link>
                </aside>
            </div>
        </div>
    )
}