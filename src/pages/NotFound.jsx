import { Link } from 'react-router'
import content from '../content/content'

export default function NotFound() {
    return (
        <div>
            <h1 className="text-2xl font-bold">{content.notFound.title}</h1>
            <p className="mt-2 text-gray-600">{content.notFound.message}</p>
            <Link to="/" className="mt-4 inline-block text-orange-500 underline">
                {content.notFound.button}
            </Link>
        </div>
    )
}