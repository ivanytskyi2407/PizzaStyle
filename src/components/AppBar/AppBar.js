import s from './AppBar.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AppBar() {
  const cart = useSelector((state) => state.pizzaStyle.cart);
  const cartSum = cart.reduce((acc, curr) => acc + curr.quantity, 0);

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
          {cartSum ? cartSum : null}
          Cart
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
