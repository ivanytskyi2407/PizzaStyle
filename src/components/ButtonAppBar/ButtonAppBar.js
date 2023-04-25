import s from './ButtonAppBar.module.css';
import { useSelector } from 'react-redux';
import { AppBar, Badge, Toolbar, Typography } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { LocalPizza, ShoppingCart } from '@mui/icons-material';

export default function ButtonAppBar() {
  const cart = useSelector((state) => state.pizzaStyle.cart);
  const cartSum = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <>
      <AppBar position="static" sx={{ mb: 5 }}>
        <Toolbar>
          <Typography variant="h6" body1="span" sx={{ flexGrow: 1 }}>
            <NavLink
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              exact="true"
              to="/"
            >
              <LocalPizza />
              Pizza
            </NavLink>
          </Typography>
          <Typography>
            <NavLink
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              to="/cart"
            >
              <Badge color="secondary" badgeContent={cartSum}>
                <ShoppingCart />
              </Badge>
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
//  <div className="container">
//    <header className={s.header}>
//      <NavLink
//        exact="true"
//        to="/"
//        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
//      >
//        Pizza
//      </NavLink>
//      <NavLink
//        to="/cart"
//        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
//      >
//        {cartSum ? cartSum : null}
//        Cart
//      </NavLink>
//    </header>
//    <main>
//      <Outlet />
//    </main>
//  </div>;
