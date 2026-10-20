import { Link, Navigate } from 'react-router'
import { useCart } from '../context/CartContext'
import content from '../content/content'

export default function Confirmation() {
    const { lastOrder } = useCart()

    if (!lastOrder) {
        return <Navigate to="/" replace />
    }

    return (
        <div className="mx-auto max-w-xl rounded-lg border bg-white p-6">
            <h1 className="text-2xl font-bold text-orange-500">{content.confirmation.title}</h1>
            <p className="mt-1 text-gray-600">{content.confirmation.message}</p>

            <p className="mt-4 text-sm text-gray-500">
                {content.confirmation.orderNumber}{lastOrder.id}
            </p>
            <p className="text-sm">
                {content.confirmation.statusLabel}: <span className="font-medium">{lastOrder.status}</span>
            </p>
            <p className="text-sm">
                {content.confirmation.deliveringTo}: <span className="font-medium">{lastOrder.customerName}</span>, {lastOrder.address}
            </p>

            <h2 className="mt-6 font-semibold">{content.confirmation.itemsTitle}</h2>
            <ul className="mt-2 space-y-1 text-sm">
                {lastOrder.items.map((cartItem) => (
                    <li key={cartItem.menuItem.id} className="flex justify-between">
                        <span>{cartItem.quantity} × {cartItem.menuItem.name}</span>
                        <span>{cartItem.getFormattedSubtotal()}</span>
                    </li>
                ))}
            </ul>

            <p className="mt-4 border-t pt-3 text-right font-bold">
                {content.confirmation.total}: {lastOrder.getFormattedTotal()}
            </p>

            <Link
                to="/"
                className="mt-6 inline-block rounded bg-orange-500 px-5 py-2 text-white hover:bg-orange-600"
            >
                {content.confirmation.backHome}
            </Link>
        </div>
    )
}