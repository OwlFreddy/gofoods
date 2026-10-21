import { Link } from 'react-router'
import ImageWithFallback from './ImageWithFallback'
import Icon from './Icon'
import content from '../content/content'

export default function RestaurantCard({ restaurant }) {
    return (
        <Link
            to={`/restaurants/${restaurant.id}`}
            className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
            <ImageWithFallback src={restaurant.image} alt={restaurant.name} className="h-36 w-full" />

            <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-gray-900">{restaurant.name}</h3>
                    <span className="flex items-center gap-1 text-sm font-semibold text-gray-900">
            <Icon name="star" filled className="h-4 w-4 text-amber-400" />
                        {restaurant.rating}
          </span>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                    {restaurant.cuisine} {content.symbols.separator}{' '}
                    <span className="font-semibold text-gray-800">{restaurant.getPriceSymbol()}</span>
                </p>

                <p className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                    <Icon name="clock" className="h-3.5 w-3.5" />
                    {restaurant.getDeliveryRange()} {content.restaurants.deliveryUnit}
                </p>
            </div>
        </Link>
    )
}