import { Link } from 'react-router'
import restaurants from '../data/restaurants'
import categories from '../data/categories'
import RestaurantCard from '../components/RestaurantCard'
import content from '../content/content'

export default function Home() {
    const topRated = [...restaurants].sort((a, b) => b.rating - a.rating).slice(0, 3)

    return (
        <div className="space-y-12">
            <section className="rounded-xl bg-orange-500 p-10 text-white">
                <h1 className="text-4xl font-bold">{content.home.heroTitle}</h1>
                <p className="mt-2 max-w-xl text-orange-50">{content.home.heroSubtitle}</p>
                <Link
                    to="/restaurants"
                    className="mt-6 inline-block rounded bg-white px-5 py-2 font-semibold text-orange-500 hover:bg-orange-50"
                >
                    {content.home.heroButton}
                </Link>
            </section>

            <section>
                <h2 className="mb-4 text-2xl font-bold">{content.home.categoriesTitle}</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                    {categories.map((c) => (
                        <Link
                            key={c.id}
                            to={`/restaurants?category=${c.id}`}
                            className="rounded-lg border bg-white p-4 text-center shadow-sm hover:border-orange-500"
                        >
                            <div className="text-3xl">{c.icon}</div>
                            <div className="mt-1 text-sm font-medium">{c.name}</div>
                        </Link>
                    ))}
                </div>
            </section>

            <section>
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{content.home.featuredTitle}</h2>
                    <Link to="/restaurants" className="text-orange-500 hover:underline">
                        {content.home.viewAll}
                    </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {topRated.map((r) => (
                        <RestaurantCard key={r.id} restaurant={r} />
                    ))}
                </div>
            </section>
        </div>
    )
}