import { Outlet } from 'react-router'

export default function PageContainer() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
            <Outlet />
        </div>
    )
}