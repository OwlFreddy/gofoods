import { NavLink } from 'react-router'
import Logo from './Logo'
import Icon from './Icon'
import { useCart } from '../context/CartContext'
import content from '../content/content'

export default function Navbar() {
    const { cart } = useCart()

    const linkClass = ({ isActive }) =>
        `flex h-full items-center border-b-2 text-sm font-medium sm:text-base ${
            isActive
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-600 hover:text-orange-600'
        }`

    return (
        <header className="border-b bg-white">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
                <NavLink to="/">
                    <Logo />
                </NavLink>

                <div className="flex h-full items-center gap-4 sm:gap-8">
                    <NavLink to="/" end className={linkClass}>
                        {content.nav.home}
                    </NavLink>
                    <NavLink to="/restaurants" className={linkClass}>
                        {content.nav.restaurants}
                    </NavLink>
                    <NavLink to="/cart" className={linkClass}>
                        <Icon name="cart" className="mr-1.5 h-4 w-4" />
                        {content.nav.cart}
                        <span className="ml-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-semibold text-white">
              {cart.getTotalItems()}
            </span>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}