import { Link } from 'react-router'
import ImageWithFallback from './ImageWithFallback'
import content from '../content/content'

export default function RestaurantCard({ restaurant }) {
    return (
        <Link
            to={`/restaurants/${restaurant.id}`}
            className="overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md"
        >
            <ImageWithFallback src={restaurant.image} alt={restaurant.name} className="h-40 w-full" />
            <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold">{restaurant.name}</h3>
                    <span className="text-sm font-medium text-orange-500">{content.symbols.star} {restaurant.rating}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                    {restaurant.cuisine} {content.symbols.separator} {restaurant.getPriceSymbol()} {content.symbols.separator} {restaurant.deliveryTime} {content.restaurants.deliveryUnit}
                </p>
                <p className="mt-2 line-clamp-2 text-sm text-gray-500">{restaurant.description}</p>
            </div>
        </Link>
    )
}