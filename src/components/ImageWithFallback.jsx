import { useState } from 'react'
import Icon from './Icon'

export default function ImageWithFallback({ src, alt, label = '', className = '' }) {
    const [failed, setFailed] = useState(false)

    if (failed || !src) {
        return (
            <div
                role="img"
                aria-label={alt}
                className={`flex flex-col items-center justify-center gap-2 bg-orange-100 text-orange-600 ${className}`}
            >
                <Icon name="utensils" className="h-8 w-8" />
                {label && <span className="px-2 text-center text-xs font-medium text-orange-700">{label}</span>}
            </div>
        )
    }

    return <img src={src} alt={alt} onError={() => setFailed(true)} className={`object-cover ${className}`} />
}