import { Link } from 'react-router'
import ImageWithFallback from '../components/ImageWithFallback'
import { useCart } from '../context/CartContext'
import content from '../content/content'

export default function Cart() {
    const { cart, updateQuantity, removeItem, clearCart } = useCart()

    if (cart.isEmpty()) {
        return (
            <div className="py-10 text-center">
                <h1 className="text-2xl font-bold">{content.cart.title}</h1>
                <p className="mt-2 text-gray-600">{content.cart.empty}</p>
                <Link
                    to="/restaurants"
                    className="mt-4 inline-block rounded bg-orange-500 px-5 py-2 text-white hover:bg-orange-600"
                >
                    {content.cart.emptyButton}
                </Link>
            </div>
        )
    }

    const qtyButton = 'h-8 w-8 rounded border bg-white hover:border-orange-500'

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{content.cart.title}</h1>
                <button onClick={clearCart} className="text-sm text-gray-500 underline hover:text-red-600">
                    {content.cart.clearButton}
                </button>
            </div>

            <div className="mt-4 space-y-3">
                {cart.items.map((cartItem) => (
                    <div key={cartItem.menuItem.id} className="flex items-center gap-4 rounded-lg border bg-white p-3">
                        <ImageWithFallback
                            src={cartItem.menuItem.image}
                            alt={cartItem.menuItem.name}
                            className="h-16 w-16 shrink-0 rounded"
                        />

                        <div className="flex-1">
                            <h3 className="font-semibold">{cartItem.menuItem.name}</h3>
                            <p className="text-sm text-gray-500">{cartItem.menuItem.getFormattedPrice()}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                aria-label={content.cart.decreaseLabel}
                                onClick={() => updateQuantity(cartItem.menuItem.id, cartItem.quantity - 1)}
                                className={qtyButton}
                            >
                                −
                            </button>
                            <span className="w-6 text-center">{cartItem.quantity}</span>
                            <button
                                aria-label={content.cart.increaseLabel}
                                onClick={() => updateQuantity(cartItem.menuItem.id, cartItem.quantity + 1)}
                                className={qtyButton}
                            >
                                +
                            </button>
                        </div>

                        <div className="w-20 text-right font-semibold">{cartItem.getFormattedSubtotal()}</div>

                        <button
                            onClick={() => removeItem(cartItem.menuItem.id)}
                            className="text-sm text-gray-500 underline hover:text-red-600"
                        >
                            {content.cart.remove}
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-lg border bg-white p-4">
                <div>
                    <p className="text-sm text-gray-500">
                        {cart.getTotalItems()} {content.cart.itemsLabel}
                    </p>
                    <p className="text-xl font-bold">
                        {content.cart.subtotal}: {cart.getFormattedTotal()}
                    </p>
                </div>
                <Link
                    to="/checkout"
                    className="rounded bg-orange-500 px-6 py-2 font-semibold text-white hover:bg-orange-600"
                >
                    {content.cart.checkoutButton}
                </Link>
            </div>
        </div>
    )
}