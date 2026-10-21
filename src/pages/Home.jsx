import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import restaurants from '../data/restaurants'
import cuisines from '../data/cuisines'
import RestaurantCard from '../components/RestaurantCard'
import ImageWithFallback from '../components/ImageWithFallback'
import Icon from '../components/Icon'
import content from '../content/content'

export default function Home() {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    const featured = [...restaurants].sort((a, b) => b.rating - a.rating).slice(0, 4)

    const handleSearch = (e) => {
        e.preventDefault()
        const term = query.trim()
        navigate(term ? `/restaurants?search=${encodeURIComponent(term)}` : '/restaurants')
    }

    return (
        <div>
            {/* Hero */}
            <section className="border-b border-orange-100 bg-orange-50">
                <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 md:py-14">
                    <div>
            <span className="inline-block rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
              {content.home.badge}
            </span>
                        <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            {content.home.heroTitle}
                        </h1>
                        <p className="mt-4 max-w-md text-gray-600">{content.home.heroSubtitle}</p>

                        <form
                            onSubmit={handleSearch}
                            className="mt-6 flex max-w-md items-center gap-2 rounded-xl border bg-white p-2 shadow-sm"
                        >
                            <Icon name="search" className="ml-2 h-4 w-4 shrink-0 text-gray-400" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={content.home.searchPlaceholder}
                                aria-label={content.home.searchPlaceholder}
                                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                            />
                            <button
                                type="submit"
                                className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
                            >
                                {content.home.searchButton}
                            </button>
                        </form>

                        <Link
                            to="/restaurants"
                            className="mt-4 inline-flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium hover:border-orange-500"
                        >
                            {content.home.heroButton} {content.symbols.arrow}
                        </Link>
                    </div>

                    <ImageWithFallback
                        src="/images/hero.jpg"
                        alt={content.home.heroImageLabel}
                        label={content.home.heroImageLabel}
                        className="h-56 w-full rounded-3xl md:h-80"
                    />
                </div>
            </section>

            {/* Browse by cuisine */}
            <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
                <h2 className="font-heading text-2xl font-bold text-gray-900">{content.home.categoriesTitle}</h2>
                <p className="mt-1 text-sm text-gray-500">{content.home.categoriesSubtitle}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {cuisines.map((c) => (
                        <Link
                            key={c.id}
                            to={`/restaurants?cuisine=${encodeURIComponent(c.name)}`}
                            className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-orange-500 hover:bg-orange-50"
                        >
                            <span>{c.icon}</span>
                            {c.name}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured restaurants */}
            <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="font-heading text-2xl font-bold text-gray-900">{content.home.featuredTitle}</h2>
                        <p className="mt-1 text-sm text-gray-500">{content.home.featuredSubtitle}</p>
                    </div>
                    <Link to="/restaurants" className="text-sm font-medium text-orange-600 hover:underline">
                        {content.home.viewAll}
                    </Link>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {featured.map((r) => (
                        <RestaurantCard key={r.id} restaurant={r} />
                    ))}
                </div>
            </section>

            {/* How it works */}
            <section className="border-t border-orange-100 bg-orange-50 py-14">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <h2 className="text-center font-heading text-2xl font-bold text-gray-900">
                        {content.home.howItWorksTitle}
                    </h2>

                    <div className="mt-8 grid gap-8 md:grid-cols-3">
                        {content.home.steps.map((step, index) => (
                            <div key={step.title} className="text-center">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-semibold text-white">
                                    {index + 1}
                                </div>
                                <h3 className="mt-3 font-semibold text-gray-900">{step.title}</h3>
                                <p className="mx-auto mt-1 max-w-xs text-sm text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}