import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router'
import { useCart } from '../context/CartContext'
import content from '../content/content'

export default function Checkout() {
    const { cart, placeOrder } = useCart()
    const navigate = useNavigate()

    const [customerName, setCustomerName] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState('')

    if (cart.isEmpty()) {
        return <Navigate to="/cart" replace />
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (customerName.trim() === '' || address.trim() === '') {
            setError(content.checkout.requiredMessage)
            return
        }

        placeOrder({ customerName: customerName.trim(), address: address.trim() })
        navigate('/confirmation')
    }

    const inputClass = 'mt-1 w-full rounded border bg-white p-2'

    return (
        <div>
            <Link to="/cart" className="text-sm text-orange-500 hover:underline">
                {content.checkout.backToCart}
            </Link>
            <h1 className="mt-2 text-2xl font-bold">{content.checkout.title}</h1>

            <div className="mt-4 grid gap-6 md:grid-cols-2">
                <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border bg-white p-4">
                    <label className="block text-sm">
                        {content.checkout.nameLabel}
                        <input
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            placeholder={content.checkout.namePlaceholder}
                            className={inputClass}
                        />
                    </label>

                    <label className="block text-sm">
                        {content.checkout.addressLabel}
                        <textarea
                            rows={3}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder={content.checkout.addressPlaceholder}
                            className={inputClass}
                        />
                    </label>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <button
                        type="submit"
                        className="w-full rounded bg-orange-500 py-2 font-semibold text-white hover:bg-orange-600"
                    >
                        {content.checkout.placeOrder}
                    </button>
                </form>

                <div className="rounded-lg border bg-white p-4">
                    <h2 className="font-semibold">{content.checkout.summaryTitle}</h2>
                    <ul className="mt-3 space-y-2 text-sm">
                        {cart.items.map((cartItem) => (
                            <li key={cartItem.menuItem.id} className="flex justify-between">
                                <span>{cartItem.quantity} × {cartItem.menuItem.name}</span>
                                <span>{cartItem.getFormattedSubtotal()}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 border-t pt-3 text-right font-bold">
                        {content.cart.subtotal}: {cart.getFormattedTotal()}
                    </p>
                </div>
            </div>
        </div>
    )
}