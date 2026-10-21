import { Link } from 'react-router'
import Logo from './Logo'
import content from '../content/content'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-sm text-gray-300">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 sm:flex-row sm:justify-between sm:px-6">
                <Link to="/">
                    <Logo light />
                </Link>

                <nav className="flex gap-6">
                    <Link to="/" className="hover:text-white">{content.nav.home}</Link>
                    <Link to="/restaurants" className="hover:text-white">{content.nav.restaurants}</Link>
                    <Link to="/cart" className="hover:text-white">{content.nav.cart}</Link>
                </nav>

                <p className="text-gray-400">{content.footer}</p>
            </div>
        </footer>
    )
}