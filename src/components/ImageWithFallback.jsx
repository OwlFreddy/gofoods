import { useState } from 'react'
import content from '../content/content'

export default function ImageWithFallback({ src, alt, className = '' }) {
    const [failed, setFailed] = useState(false)

    if (failed || !src) {
        return (
            <div className={`flex items-center justify-center bg-gray-200 text-sm text-gray-500 ${className}`}>
                {content.common.noImage}
            </div>
        )
    }

    return <img src={src} alt={alt} onError={() => setFailed(true)} className={`object-cover ${className}`} />
}