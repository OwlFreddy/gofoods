import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router'
import restaurants from '../data/restaurants'
import menuItems from '../data/menuItems'
import cuisines from '../data/cuisines'
import RestaurantCard from '../components/RestaurantCard'
import Icon from '../components/Icon'
import { CURRENCY } from '../utils/formatPrice'
import content from '../content/content'

export default function Restaurants() {
    const [searchParams] = useSearchParams()

    const [search, setSearch] = useState(searchParams.get('search') || '')
    const [selectedCuisines, setSelectedCuisines] = useState(() => {
        const fromUrl = searchParams.get('cuisine')
        return fromUrl ? [fromUrl] : []
    })
    const [price, setPrice] = useState(null)
    const [minRating, setMinRating] = useState(null)
    const [sortBy, setSortBy] = useState('rating')

    const priceLevels = [...new Set(restaurants.map((r) => r.priceLevel))].sort()

    const toggleCuisine = (name) =>
        setSelectedCuisines((current) =>
            current.includes(name) ? current.filter((c) => c !== name) : [...current, name]
        )

    const togglePrice = (level) => setPrice((current) => (current === level ? null : level))
    const toggleRating = (value) => setMinRating((current) => (current === value ? null : value))

    const clearFilters = () => {
        setSearch('')
        setSelectedCuisines([])
        setPrice(null)
        setMinRating(null)
    }

    const filtered = useMemo(() => {
        const term = search.trim().toLowerCase()

        const result = restaurants.filter((r) => {
            const matchesSearch =
                term === '' ||
                r.name.toLowerCase().includes(term) ||
                r.cuisine.toLowerCase().includes(term) ||
                r.getMenu(menuItems).some((item) => item.name.toLowerCase().includes(term))

            const matchesCuisine = selectedCuisines.length === 0 || selectedCuisines.includes(r.cuisine)
            const matchesPrice = price === null || r.priceLevel === price
            const matchesRating = minRating === null || r.rating >= minRating

            return matchesSearch && matchesCuisine && matchesPrice && matchesRating
        })

        return result.sort((a, b) => {
            if (sortBy === 'deliveryTime') return a.deliveryMin - b.deliveryMin || b.rating - a.rating
            if (sortBy === 'price') return a.priceLevel - b.priceLevel || b.rating - a.rating
            return b.rating - a.rating
        })
    }, [search, selectedCuisines, price, minRating, sortBy])

    const ratingLabel = content.restaurants.ratingOptions.find((o) => o.value === minRating)?.label
    const chips = []
    if (search.trim()) {
        chips.push({ key: 'search', label: `${content.restaurants.searchChip}: ${search.trim()}`, remove: () => setSearch('') })
    }
    selectedCuisines.forEach((name) =>
        chips.push({ key: `cuisine-${name}`, label: name, remove: () => toggleCuisine(name) })
    )
    if (price !== null) {
        chips.push({ key: 'price', label: `${content.restaurants.priceChip} ${CURRENCY.repeat(price)}`, remove: () => setPrice(null) })
    }
    if (minRating !== null) {
        chips.push({ key: 'rating', label: `${content.restaurants.ratingChip} ${ratingLabel}`, remove: () => setMinRating(null) })
    }

    const optionClass = (active) =>
        `rounded-lg border px-2 py-2 text-sm font-medium ${
            active
                ? 'border-orange-500 bg-orange-100 text-orange-700'
                : 'bg-white text-gray-700 hover:border-orange-500'
        }`

    return (
        <div>
            {/* Header band */}
            <section className="border-b border-orange-100 bg-orange-50">
                <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
                    <h1 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
                        {content.restaurants.title}
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                        {filtered.length}{' '}
                        {filtered.length === 1 ? content.restaurants.resultsCountOne : content.restaurants.resultsCount}
                    </p>
                </div>
            </section>

            <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[260px_1fr]">
                {/* Filter sidebar */}
                <aside className="h-fit rounded-xl border bg-white p-4 shadow-sm lg:sticky lg:top-4">
                    <h2 className="flex items-center gap-2 font-semibold text-gray-900">
                        <Icon name="filter" className="h-4 w-4" />
                        {content.restaurants.filtersTitle}
                    </h2>

                    <label className="mt-4 block text-sm font-medium text-gray-700">
                        {content.restaurants.searchLabel}
                        <div className="relative mt-1">
                            <Icon name="search" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={content.restaurants.searchPlaceholder}
                                className="w-full rounded-lg border py-2 pl-9 pr-3 text-sm font-normal outline-none focus:border-orange-500"
                            />
                        </div>
                    </label>

                    <fieldset className="mt-5">
                        <legend className="text-sm font-medium text-gray-700">{content.restaurants.cuisineLabel}</legend>
                        <div className="mt-2 space-y-2">
                            {cuisines.map((c) => (
                                <label key={c.id} className="flex items-center gap-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        checked={selectedCuisines.includes(c.name)}
                                        onChange={() => toggleCuisine(c.name)}
                                        className="h-4 w-4 accent-orange-500"
                                    />
                                    {c.name}
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    <fieldset className="mt-5">
                        <legend className="text-sm font-medium text-gray-700">{content.restaurants.priceLabel}</legend>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                            {priceLevels.map((level) => (
                                <button
                                    key={level}
                                    type="button"
                                    aria-pressed={price === level}
                                    onClick={() => togglePrice(level)}
                                    className={optionClass(price === level)}
                                >
                                    {CURRENCY.repeat(level)}
                                </button>
                            ))}
                        </div>
                    </fieldset>

                    <fieldset className="mt-5">
                        <legend className="text-sm font-medium text-gray-700">{content.restaurants.ratingLabel}</legend>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                            {content.restaurants.ratingOptions.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    aria-pressed={minRating === option.value}
                                    onClick={() => toggleRating(option.value)}
                                    className={optionClass(minRating === option.value)}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </fieldset>

                    <button
                        type="button"
                        onClick={clearFilters}
                        className="mt-5 w-full rounded-lg border py-2 text-sm font-medium text-gray-700 hover:border-orange-500"
                    >
                        {content.restaurants.clearFilters}
                    </button>
                </aside>

                {/* Results */}
                <div>
                    <div className="flex flex-wrap items-center gap-2">
                        {chips.length > 0 && (
                            <>
                                <span className="text-sm text-gray-500">{content.restaurants.activeFilters}</span>
                                {chips.map((chip) => (
                                    <button
                                        key={chip.key}
                                        type="button"
                                        onClick={chip.remove}
                                        aria-label={`${content.restaurants.removeFilter}: ${chip.label}`}
                                        className="inline-flex items-center gap-1 rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 hover:bg-orange-200"
                                    >
                                        {chip.label}
                                        <Icon name="close" className="h-3 w-3" />
                                    </button>
                                ))}
                            </>
                        )}

                        <label className="ml-auto flex items-center gap-2 text-sm text-gray-600">
                            {content.restaurants.sortLabel}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="rounded-lg border bg-white px-3 py-2 text-sm text-gray-900"
                            >
                                {content.restaurants.sortOptions.map((o) => (
                                    <option key={o.value} value={o.value}>{o.label}</option>
                                ))}
                            </select>
                        </label>
                    </div>

                    {filtered.length === 0 ? (
                        <div className="mt-10 text-center">
                            <p className="text-gray-600">{content.restaurants.noResults}</p>
                            <button onClick={clearFilters} className="mt-2 text-orange-600 underline">
                                {content.restaurants.clearFilters}
                            </button>
                        </div>
                    ) : (
                        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                            {filtered.map((r) => (
                                <RestaurantCard key={r.id} restaurant={r} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}