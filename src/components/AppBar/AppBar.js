import s from './AppBar.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AppBar() {
  const cartSum = useSelector((state) => state.pizzaStyle.cart);

  return (
    <div className="container">
      <header className={s.header}>
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Pizza
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          {cartSum.length}
          Cart
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
