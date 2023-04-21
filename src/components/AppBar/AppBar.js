import s from './AppBar.module.css';
import { NavLink, Outlet } from 'react-router-dom';

export default function AppBar() {
  return (
    <div className="container">
      <header className={s.header}>
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}>
          Pizza
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}>
          Cart
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
