export const CURRENCY = '₱'

export function formatPrice(amount) {
    return CURRENCY + amount.toLocaleString('en-PH')
}