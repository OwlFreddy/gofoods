import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Navbar />
            <main className="mx-auto w-full max-w-6xl flex-1 p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}