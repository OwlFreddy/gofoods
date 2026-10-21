import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'
import ConflictDialog from './ConflictDialog'

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex flex-1 flex-col">
                <Outlet />
            </main>
            <Footer />
            <ConflictDialog />
        </div>
    )
}