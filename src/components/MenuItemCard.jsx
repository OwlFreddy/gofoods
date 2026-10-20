import ImageWithFallback from './ImageWithFallback'
import { useCart } from '../context/CartContext'
import content from '../content/content'

export default function MenuItemCard({ item }) {
    const { addItem } = useCart()

    return (
        <div className="flex gap-4 rounded-lg border bg-white p-3 shadow-sm">
            <ImageWithFallback src={item.image} alt={item.name} className="h-24 w-24 shrink-0 rounded" />

            <div className="flex flex-1 flex-col">
                <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    {item.isVegetarian && (
                        <span className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-700">
              {content.menu.vegetarianBadge}
            </span>
                    )}
                    {item.isSpicy && (
                        <span className="rounded bg-red-100 px-2 py-0.5 text-xs text-red-700">
              {content.menu.spicyBadge}
            </span>
                    )}
                </div>

                <p className="mt-1 flex-1 text-sm text-gray-500">{item.description}</p>

                <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold text-orange-500">{item.getFormattedPrice()}</span>
                    <button
                        onClick={() => addItem(item)}
                        className="rounded bg-orange-500 px-3 py-1 text-sm text-white hover:bg-orange-600"
                    >
                        {content.menu.addToCart}
                    </button>
                </div>
            </div>
        </div>
    )
}