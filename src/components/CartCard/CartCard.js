import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import CartCounter from '../CartCounter/CartCounter';
import s from './CartCard.module.css';

export default function CartCart() {
  const cart = useSelector((state) => state.pizzaStyle.cart);

  return cart.map(({ id, title, description, price, image, quantity }) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={id}>
        <Card className={s.cart}>
          <CardMedia
            image={image}
            alt={title}
            loading="lazy"
            title={title}
            className={s.img}
          />
          <CardContent sx={{ height: 100 }}>
            <Typography variant="h6" component="h3">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
            <Typography variant="body1">{price * quantity}UAH</Typography>
          </CardContent>
          <CardActions>
            <CartCounter id={id} />
          </CardActions>
        </Card>
      </Grid>
    );
  });
}

CartCart.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
