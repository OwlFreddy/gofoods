import { Link, Navigate } from 'react-router'
import Icon from '../components/Icon'
import { useCart } from '../context/CartContext'
import content from '../content/content'

export default function Confirmation() {
    const { lastOrder } = useCart()

    if (!lastOrder) {
        return <Navigate to="/" replace />
    }

    const label = 'text-xs text-gray-500'

    return (
        <div className="flex-1 bg-orange-50 px-4 py-10 sm:px-6">
            <div className="mx-auto max-w-xl text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Icon name="check" className="h-7 w-7" />
                </div>
                <h1 className="mt-4 font-heading text-3xl font-bold text-gray-900">{content.confirmation.title}</h1>
                <p className="mt-1 text-sm text-gray-600">
                    {content.confirmation.sentTo} {lastOrder.restaurant.name}.
                </p>
            </div>

            <div className="mx-auto mt-6 max-w-xl rounded-xl border bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3 border-b pb-4">
                    <div>
                        <p className={label}>{content.confirmation.orderId}</p>
                        <p className="font-heading text-lg font-bold text-gray-900">{lastOrder.getDisplayId()}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
            <Icon name="clock" className="h-3.5 w-3.5" />
                        {lastOrder.status}
          </span>
                </div>

                <div className="grid gap-4 border-b py-4 text-sm sm:grid-cols-2">
                    <div>
                        <p className={label}>{content.confirmation.placedAt}</p>
                        <p className="font-semibold text-gray-900">{lastOrder.getFormattedDate()}</p>
                    </div>
                    <div>
                        <p className={label}>{content.confirmation.customer}</p>
                        <p className="font-semibold text-gray-900">{lastOrder.customerName}</p>
                    </div>
                    <div className="sm:col-span-2">
                        <p className={label}>{content.confirmation.address}</p>
                        <p className="font-semibold text-gray-900">{lastOrder.address}</p>
                    </div>
                </div>

                <ul className="space-y-2 border-b py-4 text-sm">
                    {lastOrder.items.map((cartItem) => (
                        <li key={cartItem.menuItem.id} className="flex justify-between gap-2">
              <span>
                {cartItem.quantity}
                  {content.symbols.times} {cartItem.menuItem.name}
              </span>
                            <span className="font-medium">{cartItem.getFormattedSubtotal()}</span>
                        </li>
                    ))}
                </ul>

                <dl className="space-y-2 pt-4 text-sm">
                    <div className="flex justify-between">
                        <dt className="text-gray-600">{content.confirmation.subtotal}</dt>
                        <dd>{lastOrder.getFormattedSubtotal()}</dd>
                    </div>
                    <div className="flex justify-between">
                        <dt className="text-gray-600">{content.confirmation.deliveryFee}</dt>
                        <dd>{lastOrder.getFormattedDeliveryFee()}</dd>
                    </div>
                    <div className="flex justify-between border-t pt-3 text-lg font-bold">
                        <dt>{content.confirmation.total}</dt>
                        <dd>{lastOrder.getFormattedTotal()}</dd>
                    </div>
                </dl>
            </div>

            <div className="mt-6 flex justify-center gap-3">
                <Link
                    to="/"
                    className="rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white hover:bg-orange-600"
                >
                    {content.confirmation.backHome}
                </Link>
                <Link
                    to={`/restaurants/${lastOrder.restaurant.id}`}
                    className="rounded-lg border bg-white px-5 py-2 font-medium text-gray-700 hover:border-orange-500"
                >
                    {content.confirmation.orderAgain}
                </Link>
            </div>
        </div>
    )
}