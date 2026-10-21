import { useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router'
import Icon from '../components/Icon'
import { useCart } from '../context/CartContext'
import content from '../content/content'

const PHONE_PATTERN = /^\d{11}$/

export default function Checkout() {
    const { cart, cartRestaurant, placeOrder } = useCart()
    const navigate = useNavigate()
    const placed = useRef(false)

    const [customerName, setCustomerName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [payment, setPayment] = useState(content.checkout.paymentOptions[0].value)
    const [notes, setNotes] = useState('')
    const [errors, setErrors] = useState({})

    if (placed.current) return null
    if (cart.isEmpty()) return <Navigate to="/cart" replace />

    const clearError = (field) => setErrors((current) => ({ ...current, [field]: undefined }))

    const handleSubmit = (e) => {
        e.preventDefault()

        const cleanPhone = phone.replace(/[\s-]/g, '')

        const newErrors = {}
        if (customerName.trim() === '') newErrors.name = content.checkout.nameError
        if (!PHONE_PATTERN.test(cleanPhone)) newErrors.phone = content.checkout.phoneError
        if (address.trim() === '') newErrors.address = content.checkout.addressError

        setErrors(newErrors)
        if (Object.keys(newErrors).length > 0) return

        const method = content.checkout.paymentOptions.find((o) => o.value === payment)

        placed.current = true
        placeOrder({
            customerName: customerName.trim(),
            phone: cleanPhone,
            address: address.trim(),
            paymentMethod: method.label,
            notes: notes.trim(),
        })
        navigate('/confirmation')
    }

    const inputClass = (hasError) =>
        `mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm font-normal outline-none ${
            hasError ? 'border-red-400 bg-red-50 focus:border-red-500' : 'focus:border-orange-500'
        }`

    const FieldError = ({ message }) =>
        message ? (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                <Icon name="alert" className="h-3.5 w-3.5" />
                {message}
            </p>
        ) : null

    return (
        <div>
            <Link to="/cart" className="text-sm font-medium text-orange-600 hover:underline">
                {content.checkout.backToCart}
            </Link>
            <h1 className="mt-3 font-heading text-3xl font-bold text-gray-900">{content.checkout.title}</h1>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
                <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-xl border bg-white p-5 shadow-sm">
                    <h2 className="font-heading text-lg font-bold text-gray-900">{content.checkout.detailsTitle}</h2>

                    <label className="block text-sm font-medium text-gray-700">
                        {content.checkout.nameLabel}
                        <input
                            type="text"
                            value={customerName}
                            onChange={(e) => {
                                setCustomerName(e.target.value)
                                clearError('name')
                            }}
                            placeholder={content.checkout.namePlaceholder}
                            className={inputClass(errors.name)}
                        />
                        <FieldError message={errors.name} />
                    </label>

                    <label className="block text-sm font-medium text-gray-700">
                        {content.checkout.phoneLabel}
                        <input
                            type="tel"
                            inputMode="numeric"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value)
                                clearError('phone')
                            }}
                            placeholder={content.checkout.phonePlaceholder}
                            className={inputClass(errors.phone)}
                        />
                        <FieldError message={errors.phone} />
                    </label>

                    <label className="block text-sm font-medium text-gray-700">
                        {content.checkout.addressLabel}
                        <textarea
                            rows={3}
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value)
                                clearError('address')
                            }}
                            placeholder={content.checkout.addressPlaceholder}
                            className={inputClass(errors.address)}
                        />
                        <FieldError message={errors.address} />
                    </label>

                    <fieldset>
                        <legend className="text-sm font-medium text-gray-700">{content.checkout.paymentLabel}</legend>
                        <div className="mt-2 space-y-2">
                            {content.checkout.paymentOptions.map((option) => (
                                <label
                                    key={option.value}
                                    className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-3 text-sm font-medium ${
                                        payment === option.value ? 'border-orange-500 bg-orange-50' : 'bg-white hover:border-orange-500'
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value={option.value}
                                        checked={payment === option.value}
                                        onChange={() => setPayment(option.value)}
                                        className="h-4 w-4 accent-orange-500"
                                    />
                                    {option.label}
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    <label className="block text-sm font-medium text-gray-700">
                        {content.checkout.notesLabel}
                        <textarea
                            rows={2}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder={content.checkout.notesPlaceholder}
                            className={inputClass(false)}
                        />
                    </label>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600"
                    >
                        {content.checkout.placeOrder}
                    </button>
                </form>

                <aside className="h-fit rounded-xl border bg-white p-4 shadow-sm lg:sticky lg:top-4">
                    <h2 className="font-heading text-lg font-bold text-gray-900">{content.checkout.summaryTitle}</h2>
                    <p className="text-xs text-gray-500">
                        {content.checkout.from} {cartRestaurant.name}
                    </p>

                    <ul className="mt-3 space-y-2 text-sm">
                        {cart.items.map((cartItem) => (
                            <li key={cartItem.menuItem.id} className="flex justify-between gap-2">
                <span>
                  {cartItem.quantity}
                    {content.symbols.times} {cartItem.menuItem.name}
                </span>
                                <span className="font-medium">{cartItem.getFormattedSubtotal()}</span>
                            </li>
                        ))}
                    </ul>

                    <dl className="mt-4 space-y-2 border-t pt-3 text-sm">
                        <div className="flex justify-between">
                            <dt className="text-gray-600">{content.cart.subtotal}</dt>
                            <dd>{cart.getFormattedSubtotal()}</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-gray-600">{content.cart.deliveryFee}</dt>
                            <dd>{cartRestaurant.getFormattedDeliveryFee()}</dd>
                        </div>
                        <div className="flex justify-between border-t pt-3 text-base font-bold">
                            <dt>{content.cart.total}</dt>
                            <dd>{cart.getFormattedTotal(cartRestaurant.deliveryFee)}</dd>
                        </div>
                    </dl>
                </aside>
            </div>
        </div>
    )
}