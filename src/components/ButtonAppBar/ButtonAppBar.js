import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { AppBar, Badge, Container, Toolbar, Typography } from '@mui/material';
import { LocalPizza, ShoppingCart } from '@mui/icons-material';
import Footer from '../Footer/Footer';
import s from './ButtonAppBar.module.css';

export default function ButtonAppBar() {
  const cart = useSelector((state) => state.pizzaStyle.cart);
  const cartSum = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <>
      <AppBar>
        <Container>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <NavLink
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              exact="true"
              to="/"
            >
              <Typography
                variant="h6"
                body1="span"
                sx={{
                  color: 'primary.contrastText',
                }}
              >
                <LocalPizza />
                Pizza
              </Typography>
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              to="/cart"
            >
              <Typography>
                <Badge color="secondary" badgeContent={cartSum}>
                  <ShoppingCart aria-label="cart" />
                </Badge>
              </Typography>
            </NavLink>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
