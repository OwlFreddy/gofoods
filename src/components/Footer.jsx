import content from '../content/content'

export default function Footer() {
    return (
        <footer className="border-t bg-white p-4 text-center text-sm text-gray-500">
            {content.footer}
        </footer>
    )
}