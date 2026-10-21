import { useEffect } from 'react'
import { useCart } from '../context/CartContext'
import content from '../content/content'

export default function ConflictDialog() {
    const { pendingItem, confirmReplace, cancelReplace } = useCart()

    // Escape closes the popup (same as "Keep current cart")
    useEffect(() => {
        if (!pendingItem) return
        const onKey = (e) => {
            if (e.key === 'Escape') cancelReplace()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [pendingItem, cancelReplace])

    if (!pendingItem) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="conflict-title"
        >
            <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
                <h2 id="conflict-title" className="font-heading text-lg font-bold text-gray-900">
                    {content.menu.conflictTitle}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{content.menu.conflictMessage}</p>

                <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                    <button
                        onClick={cancelReplace}
                        className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:border-orange-500"
                    >
                        {content.menu.conflictCancel}
                    </button>
                    <button
                        onClick={confirmReplace}
                        className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
                    >
                        {content.menu.conflictConfirm}
                    </button>
                </div>
            </div>
        </div>
    )
}