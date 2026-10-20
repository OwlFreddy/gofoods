import { NavLink } from 'react-router'
import { useCart } from '../context/CartContext'
import content from '../content/content'

export default function Navbar() {
    const { cart } = useCart()

    const linkClass = ({ isActive }) =>
        isActive ? 'font-semibold text-orange-500' : 'text-gray-600 hover:text-orange-500'

    return (
        <header className="border-b bg-white">
            <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
                <NavLink to="/" className="text-xl font-bold text-orange-500">
                    {content.appName}
                </NavLink>
                <div className="flex items-center gap-6">
                    <NavLink to="/" end className={linkClass}>{content.nav.home}</NavLink>
                    <NavLink to="/restaurants" className={linkClass}>{content.nav.restaurants}</NavLink>
                    <NavLink to="/cart" className={linkClass}>
                        {content.nav.cart} ({cart.getTotalItems()})
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}