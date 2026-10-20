import { useParams } from 'react-router'
import restaurants from '../data/restaurants'

export default function RestaurantMenu() {
    const { id } = useParams()
    const restaurant = restaurants.find((r) => r.id === Number(id))

    return <h1 className="text-2xl font-bold">{restaurant?.name}</h1>
}