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
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import CartCounter from '../CartCounter/CartCounter';

export default function PizzaCard({ pizzas }) {
  const cart = useSelector((state) => state.pizzaStyle.cart);
  return pizzas.map(({ id, title, description, price, image }) => {
    const isInCart = cart.some((item) => item.id === id);

    return (
      <Grid item xs={12} sm={6} md={4} key={id}>
        <Card
          sx={{
            height: '100%',
            '&:hover': { boxShadow: '0px 10px 13px -7px #000000' },
          }}
        >
          <CardMedia
            loading="lazy"
            image={image}
            alt={title}
            title={title}
            sx={{
              height: 350,
              '&:hover': { transform: 'scale(1.05)' },
            }}
          />
          <CardContent sx={{ height: 100 }}>
            <Typography variant="h6" component="h3">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
            <Typography variant="body1">{price}UAH</Typography>
          </CardContent>
          <CardActions>
            {isInCart ? <CartCounter id={id} /> : <AddToCartButton id={id} />}
          </CardActions>
        </Card>
      </Grid>
    );
  });
}
PizzaCard.PropTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
};
