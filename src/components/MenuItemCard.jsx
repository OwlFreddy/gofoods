import ImageWithFallback from './ImageWithFallback'
import { useCart } from '../context/CartContext'
import content from '../content/content'

export default function MenuItemCard({ item }) {
    const { cart, addItem, updateQuantity } = useCart()
    const quantity = cart.getQuantity(item.id)

    const stepButton = 'flex h-8 w-8 items-center justify-center text-base font-semibold hover:bg-orange-50'

    return (
        <div className="flex gap-4 rounded-xl border bg-white p-4 shadow-sm">
            <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>

                {(item.isVegetarian || item.isSpicy) && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {item.isVegetarian && (
                            <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                {content.menu.vegetarianBadge}
              </span>
                        )}
                        {item.isSpicy && (
                            <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                {content.menu.spicyBadge}
              </span>
                        )}
                    </div>
                )}

                <div className="mt-auto flex items-center gap-3 pt-3">
                    <span className="font-semibold text-gray-900">{item.getFormattedPrice()}</span>

                    {quantity === 0 ? (
                        <button
                            onClick={() => addItem(item)}
                            className="inline-flex items-center gap-1 rounded-lg bg-orange-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-orange-600"
                        >
                            {content.symbols.plus} {content.menu.add}
                        </button>
                    ) : (
                        <div className="inline-flex items-center overflow-hidden rounded-lg border border-orange-500 text-orange-600">
                            <button
                                aria-label={content.cart.decreaseLabel}
                                onClick={() => updateQuantity(item.id, quantity - 1)}
                                className={stepButton}
                            >
                                {content.symbols.minus}
                            </button>
                            <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
                            <button
                                aria-label={content.cart.increaseLabel}
                                onClick={() => updateQuantity(item.id, quantity + 1)}
                                className={stepButton}
                            >
                                {content.symbols.plus}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <ImageWithFallback src={item.image} alt={item.name} className="h-24 w-24 shrink-0 rounded-lg" />
        </div>
    )
}