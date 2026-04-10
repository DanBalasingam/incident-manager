import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'
// import sidebar and topbar

export default function MainLayout() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '220px' }}>
                # topbar
                <main style={{ flex: 1, padding: '24px' }}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}