import Icon from './Icon'
import content from '../content/content'

export default function Logo({ light = false }) {
    return (
        <span className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white">
        <Icon name="utensils" className="h-4 w-4" />
      </span>
      <span className={`font-heading text-lg font-bold ${light ? 'text-white' : 'text-gray-900'}`}>
        {content.appName}
      </span>
    </span>
    )
}