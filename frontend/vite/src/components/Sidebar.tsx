import { NavLink } from "react-router"
import './Sidebar.css'

export default function Sidebar() {

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">Alert Hub</div>

            <nav className="sidebar-nav">
                <NavLink to="/" end className="sidebar-link">Dashboard</NavLink>
                <NavLink to="/incidents" className="sidebar-link">Incidents</NavLink>
            </nav>
        </aside>
    )
}