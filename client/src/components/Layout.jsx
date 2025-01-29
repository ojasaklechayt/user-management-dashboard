import { Outlet } from 'react-router-dom';
import { Users } from 'lucide-react';

export default function Layout() {
    return (
        <div>
            <nav className="nav">
                <div className="nav-container">
                    <div className="nav-content">
                        <div className="nav-brand">
                            <Users size={32} color="#4f46e5" />
                            <span className="nav-title">User Management</span>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}