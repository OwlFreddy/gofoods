import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router'
import restaurants from '../data/restaurants'
import menuItems from '../data/menuItems'
import categories from '../data/categories'
import RestaurantCard from '../components/RestaurantCard'
import content from '../content/content'

const ALL = 'all'

export default function Restaurants() {
    const [searchParams] = useSearchParams()

    const [search, setSearch] = useState('')
    const [cuisine, setCuisine] = useState(ALL)
    const [price, setPrice] = useState(ALL)
    const [category, setCategory] = useState(searchParams.get('category') || ALL)
    const [sortBy, setSortBy] = useState('rating')

    // Options come from the data, so adding a restaurant updates the filters automatically
    const cuisines = [...new Set(restaurants.map((r) => r.cuisine))]
    const priceLevels = [...new Set(restaurants.map((r) => r.priceLevel))].sort()

    const filtered = useMemo(() => {
        const term = search.trim().toLowerCase()

        const result = restaurants.filter((r) => {
            const menu = r.getMenu(menuItems)

            const matchesSearch =
                term === '' ||
                r.name.toLowerCase().includes(term) ||
                r.cuisine.toLowerCase().includes(term) ||
                menu.some((item) => item.name.toLowerCase().includes(term))

            const matchesCuisine = cuisine === ALL || r.cuisine === cuisine
            const matchesPrice = price === ALL || r.priceLevel === Number(price)
            const matchesCategory =
                category === ALL || menu.some((item) => item.categoryId === Number(category))

            return matchesSearch && matchesCuisine && matchesPrice && matchesCategory
        })

        return result.sort((a, b) => {
            if (sortBy === 'rating') return b.rating - a.rating
            if (sortBy === 'deliveryTime') return a.deliveryTime - b.deliveryTime
            return a.priceLevel - b.priceLevel
        })
    }, [search, cuisine, price, category, sortBy])

    const clearFilters = () => {
        setSearch('')
        setCuisine(ALL)
        setPrice(ALL)
        setCategory(ALL)
        setSortBy('rating')
    }

    const selectClass = 'w-full rounded border bg-white p-2'

    return (
        <div>
            <h1 className="text-2xl font-bold">{content.restaurants.title}</h1>

            <div className="mt-4 space-y-4 rounded-lg border bg-white p-4">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={content.restaurants.searchPlaceholder}
                    className="w-full rounded border p-2"
                />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <label className="text-sm">
                        {content.restaurants.cuisineLabel}
                        <select value={cuisine} onChange={(e) => setCuisine(e.target.value)} className={selectClass}>
                            <option value={ALL}>{content.restaurants.allOption}</option>
                            {cuisines.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </label>

                    <label className="text-sm">
                        {content.restaurants.priceLabel}
                        <select value={price} onChange={(e) => setPrice(e.target.value)} className={selectClass}>
                            <option value={ALL}>{content.restaurants.allOption}</option>
                            {priceLevels.map((p) => (
                                <option key={p} value={p}>
                                    {restaurants.find((r) => r.priceLevel === p).getPriceSymbol()}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="text-sm">
                        {content.restaurants.categoryLabel}
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className={selectClass}>
                            <option value={ALL}>{content.restaurants.allOption}</option>
                            {categories.map((c) => (
                                <option key={c.id} value={c.id}>{c.icon} {c.name}</option>
                            ))}
                        </select>
                    </label>

                    <label className="text-sm">
                        {content.restaurants.sortLabel}
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={selectClass}>
                            {content.restaurants.sortOptions.map((o) => (
                                <option key={o.value} value={o.value}>{o.label}</option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">
                {filtered.length} {content.restaurants.resultsCount}
            </p>

            {filtered.length === 0 ? (
                <div className="mt-6 text-center">
                    <p className="text-gray-600">{content.restaurants.noResults}</p>
                    <button onClick={clearFilters} className="mt-2 text-orange-500 underline">
                        {content.restaurants.clearFilters}
                    </button>
                </div>
            ) : (
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((r) => (
                        <RestaurantCard key={r.id} restaurant={r} />
                    ))}
                </div>
            )}
        </div>
    )
}