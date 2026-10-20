import menuItems from '../data/menuItems'
import content from '../content/content'
import { useCart } from '../context/CartContext'

export default function Home() {
    const { addItem } = useCart()

    return (
        <div>
            <h1 className="text-3xl font-bold">{content.home.heroTitle}</h1>
            <p className="mt-2 text-gray-600">{content.home.heroSubtitle}</p>
        </div>
    )
}